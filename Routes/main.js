const express = require('express');
const router = express.Router();

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

router.get('/home', (req,res) => {
	res.render('home/home') //renders views/home.handlebars
});

router.get('/Curtain', (req, res) => {
	res.render('curtain/curtain') // renders views/curtain.handlebars
});

router.get('/curtainControl', (req, res) => {
	res.render('curtain/cControl') // renders views/cControl.handlebars
});

router.get('/curtainTimed', (req, res) => {
	res.render('curtain/cTimed') // renders views/cTimed.handlebars
});

router.get('/cctv', (req, res) => {
	res.render('cctv/cctv') //renders views/cctv.handlebars
})

router.get('/aircon', (req,res) =>{
	res.render('airCon/aircon') //renders views/aircon.handlebars
})

module.exports = router;