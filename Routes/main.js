const express = require('express');
const router = express.Router();
const light_logs=require('../models/LightsDate')
const passport = require("passport")
const cControl = require("../models/cControl")
const lights_ids = require('../models/Light_number');

const ensureAuthenticated = require('../helpers/auth')

router.use(passport.initialize());
router.use(passport.session());

router.get('/', (req, res) => {
	const title = 'Living';
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
	lights_ids.findAll({ // SELECT * FROM Light_ids

	}
	).then((results) => {
		console.log('Logs:', results) // each result in results has id and light_number
		res.render('Lights/Lightss', {
			Lights: results
		})
	}).catch(err => console.log(err))
	

	/*
	res.render('Lights/Lightss', {

	})*/ // renders views/Lightss.handlebars
});

//Xavier's

router.get('/home', ensureAuthenticated,  (req, res) => {
	res.render('home/home') //renders views/home.handlebars
});

router.get('/profile', ensureAuthenticated, (req, res) => {
	res.render('profile/profile') //renders views/profile.handlebars
})

router.get('/Curtain', ensureAuthenticated, (req, res) => {
	res.render('curtain/curtain') // renders views/curtain.handlebars
});

router.get('/curtainTimed', ensureAuthenticated, (req, res) => {
	res.render('curtain/cTimed') // renders views/cTimed.handlebars
});

router.get('/curtainControl', ensureAuthenticated, (req, res) => {
    res.render('curtain/cControl') // renders views/cControl.handlebars
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

router.get('/cctvAdd', (req, res) => {
	res.render('cctv/cctvAdd')
});

//Nicholas'

router.get('/aircon', (req, res) =>{
	res.render('aircon/aircon') //renders views/aircon.handlebars
})

module.exports = router;