const express = require('express');
const router = express.Router();
const User = require('../models/User');
const alertMessage = require('../helpers/messanger');
const passport = require('passport')



// Login Form POST => /user/login
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/home/home', // Route to /video/listVideos URL
        failureRedirect: '/showLogin', // Route to /login URL
        failureFlash: true
        /* Setting the failureFlash option to true instructs Passport to flash an error
        message using the message given by the strategy's verify callback, if any.
        When a failure occur passport passes the message object as error */
    })(req, res, next);
});


// User register URL using HTTP post => /user/register
router.post('/register', (req, res) => {
    let errors = []
    let success_msg = '✔ User successfully created!';

    var password = req.body.password;
    if (password.length < 4) {
        errors.push({ text: "Password must be at least 4 characters!" })
    }

    // Check for password same as confirm password
    var confirmPassword = req.body.password2;
    if (password !== confirmPassword) {
        errors.push({ text: "Password is not the same!" })
    }

    if (errors.length > 0) {
        res.render('./user/register', {
        	name: req.body.name,
        	email: req.body.email,
        	password: req.body.password,
        	password2: req.body.password2,
            errors: errors
        })
        // res.send({ redirect: '/showRegister' })
    } else {
        // If all is well, checks if user is already registered
        User.findOne({ where: { email: req.body.email } })
            .then(user => {
                if (user) {
                    // If user is found, that means email has already been
                    // registered
                    res.render('user/register', {
                        error: user.email + ' already registered',
                        name,
                        email,
                        password,
                        password2
                    });
                } else {
                    // Encrypt the password
                    var salt = bcrypt.genSaltSync(10);
                    var hashedPassword = bcrypt.hashSync(password, salt);
                    password = hashedPassword;

                    // Create new user record
                    User.create({ name, email, password })
                        .then(user => {
                            alertMessage(res, 'success', user.name + ' added. Please login', 'fas fa-sign-in-alt', true);
                            res.redirect('/showLogin');
                        })
                        .catch(err => console.log(err));
                }
            });
    }
});


router.get('/', (req, res) => {
    const title = 'I\'m at the user router!';
    res.render('index', { title: title }) // renders views/index.handlebars
});

module.exports = router;