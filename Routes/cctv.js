const db = require('../config/DBConfig');
const express = require('express');
const router = express();
const cameras = require('../models/cctv');

router.post('/cctvAdd', (req, res) => {
    let name = req.body.name;
    let state = req.body.state;

    cameras.create({
        name: name,
        state: state,
    }).then((cctv) => {
        res.redirect('/cctv/cctv');
    }).catch(err => console.log(err));
})

router.get('/cctv', (req, res) => {
    cameras.findAll({
		raw: true
    }).then((cameras) => {
        res.render('cctv/cctv', {
            cameras
        });
    }).catch(err => console.log(err));
});

module.exports = router;