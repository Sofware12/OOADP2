const express = require('express');
const router = express.Router();

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
        res.render('./user/login', {
            success_msg: success_msg
        })
    }
});


router.get('/', (req, res) => {
    const title = 'I\'m at the user router!';
    res.render('index', { title: title }) // renders views/index.handlebars
});

module.exports = router;