const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile')
const db = require('../config/DBConfig')
const alertMessage = require('../helpers/messanger')

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
                profile
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
		res.redirect('/profile/profile');
	}).catch(err => console.log(err));
});

//Show add profile page
router.get('/showAddProfile', (req, res) => {
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
router.get('/profile', (req, res) => {
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

router.get('/delete/:id', (req, res) => {
    let profileId = req.params.id;
    Profile.findOne({
        where: {
            id: profileId,
        },
        attributes: ['id', 'userId']
    }).then((profile) => {
        if(profile != null) {
            Profile.destroy({
                where: {
                    id: profileId
                }
            }).then(() => {
                alertMessage(res, 'info', 'Profile has been deleted', 'far fa-trash-alt', true);
                res.redirect('profile/profile');
            }).catch(err => console.log(err));
        } else {
            alertMessage(res, 'danger', 'There is no such video', 'fas fa-exclamation-circle', true);
        }
    });
});

module.exports = router;