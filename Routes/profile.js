const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile')
const db = require('../config/DBConfig')
const alertMessage = require('../helpers/messanger')
const ensureAuthenticated = require('../helpers/auth')
const fileUpload = require('express-fileupload')

router.use(fileUpload());
router.use(express.static('public/images/Profile'));

// router.post('/profile', (req, res) => {
//     if(Object.keys(req.files).length == 0) {
//         res.render('profile/profile', {
//             err: 'File not uploaded'
//         });
//     }

//     let file = req.files.file;

//     sampleFile.mv('public/images/user.png',(err) => {
//         if (err) {
//             res.render('profile/profile', {
//                 err: 'Error'
//             })
//         } else {
//             alertMessage(res, 'success', 'Picture Updated', 'fas fa-sign-in-alt', false);
//             res.redirect('profile');
//         }      
//     });
// });

//Shows edit profile page
router.get('/edit/:id', (req, res) => {
    Profile.findOne({
        where: {
            id: req.params.id
        }
    }).then((profile)=> {
        if(!profile) {
            alertMessage(res, 'info', 'No such profile exist', 'fas fa-exclamation-circle', true);
            res.redirect('/profile/profile'); 
        } else {
            res.render('profile/editProfile', {
                "profile": profile,
                "isMale" : profile.Gender === 'Male',
                "isFemale": profile.Gender === 'Female'
            });
        }
    }).catch(err => console.log(err));
});

//Save edited profile page
router.put('/saveEditedProfile/:id', (req, res) => {
	let uname = req.body.uname
    let fname = req.body.fname
    let lname = req.body.lname
    let Age = req.body.Age
    let Gender = req.body.Gender
    let email = req.body.email
    let phoneNum = req.body.phoneNum
    let bio = req.body.bio

	Profile.update({
        uname,
        fname,
        lname,
        Age,
        Gender,
        email,
        phoneNum,
        bio
	}, {
		where: {
			id: req.params.id
		}
	}).then(() => {
        alertMessage(res, 'success', 'Done edited', 'fas fa-sign-in-alt', false);
		res.redirect('/profile/profile');
	}).catch(err => console.log(err));
});

//Show add profile page
router.get('/showAddProfile', ensureAuthenticated, (req, res) => {
    res.render('profile/addProfile');
});

//Add Profile
router.post('/addProfile', (req, res) => {
    let uname = req.body.uname 
    let fname = req.body.fname
    let lname = req.body.lname
    let Age = req.body.Age
    let Gender = req.body.Gender
    let email = req.body.email
    let phoneNum = req.body.phoneNum
    let bio = req.body.bio

    Profile.create({
        uname,
        fname,
        lname,
        Age,
        Gender,
        email,
        phoneNum,
        bio
    }).then((profile) => {
        res.redirect('/profile/profile');
    }).catch(err => console.log(err))
});

//Show the profile to the logged in user
router.get('/profile', ensureAuthenticated, (req, res) => {
    Profile.findAll({
        order: [
            ['uname', 'ASC']
        ],
        raw: true
    }).then((profile) => {
        res.render('profile/profile', {
            profile
        });
    }).catch(err => console.log(err));
});

router.get('/video/delete/:id', ensureAuthenticated, (req, res) => {
    let profileId = req.params.id;
    Profile.findOne({
        where: {
            id: profileId,
        },
        attributes: ['id', 'id']
    }).then((profile) => {
            Profile.destroy({
                where: {
                    id: profileId
                }
            }).then(() => {
                alertMessage(res, 'info', 'Profile has been deleted', 'far fa-trash-alt', true);
                res.render('profile/profile');
            }).catch(err => console.log(err));
    });
});

module.exports = router;