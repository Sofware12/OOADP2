const express = require('express');
const router = express.Router();
const light_logs=require('../models/LightsDate')
const passport = require("passport")
const cControl = require("../models/cControl")

router.use(passport.initialize());
router.use(passport.session());

router.get('/', (req, res) => {
	const title = 'Video Jotter';
	res.render('index', { title: title }) // renders views/index.handlebars
});

// Logout User
router.get('/logout', (req, res) => {
	req.logout();
	res.redirect('/');
});

router.get('/showLogin', (req, res) => {
	res.render('user/login') // renders views/user/login.handlebars
});

router.get('/showRegister', (req, res) => {
	res.render('user/register') // renders views/register.handlebars
});

//Yusuf's 

router.get('/lights', (req, res) => {
	res.render('Lights/Lightss') // renders views/Lightss.handlebars
});

//Xavier's

router.get('/home', (req, res) => {
	res.render('home/home') //renders views/home.handlebars
});

router.get('/profile', (req, res) => {
	res.render('profile/profile') //renders views/profile.handlebars
})

router.get('/Curtain', (req, res) => {
	res.render('curtain/curtain') // renders views/curtain.handlebars
});

router.get('/curtainControl', (req, res) => {
	res.render('curtain/cControl') // renders views/cControl.handlebars
});

// router.post('/curtainn', (req, res) => {
// 	const userId = req.user.id
// 	cControl.findAll({
// 		where: {
// 			userId: userId
// 		}
// 	}).then(Success => {
// 		if (Success.length == 0) {
// 			cControl.create({
// 				Curtains: 1,
// 				userId: userId
// 			})
// 		}
// 		else {
// 			cControl.findAll({
// 				attributes: [
// 					'Curtains',
// 				],
// 				where: {
// 					userId: userId
// 				}
// 			}).then(Success => {
// 				console.log("CHICKEN: ",Success[0].Curtains)
// 				cControl.update(
// 					{Curtains: Success[0].Curtains+1},
// 					{where: {userId: userId}
// 				})
// 				console.log(Success[0].Curtains+1)
// 				res.render('curtain/cControl', {NoCurtain: Success[0].Curtains+1})
// 			})
// 		}
// 	});
// 	res.redirect('/curtainControl')
// });

router.get('/curtainTimed', (req, res) => {
	res.render('curtain/cTimed') // renders views/cTimed.handlebars
});

router.get('curtainLog', (req, res) => {
	res.render('curtain/Logs')// renders views/Logs.handlebars
});

//Ryan's

router.get('/viewVideos', (req, res) => {
	res.render('cctv/viewVideos')
});

router.get('/deleteVideos', (req, res) => {
	res.render('cctv/deleteVideos')
});

router.get('/cctv', (req, res) => {
	res.render('cctv/cctv') //renders views/cctv.handlebars
});

router.get('/uploadFile', (req, res) => {
	res.render('cctv/uploadFile')
});

router.get('/cctv1', (req, res) => {
	res.render('cctv/cctv1')
});

//Nicholas'

router.get('/aircon', (req, res) =>{
	res.render('aircon/aircon') //renders views/aircon.handlebars
})

router.get('/achistory', (req, res) =>{
	res.render('aircon/achistory') //renders views/achistory.handlebars
})

module.exports = router;