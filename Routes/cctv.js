const db = require('../config/DBConfig');
const express = require('express');
const router = express();
const CCTV = require('../models/cctv');

router.post('/cctv', (req, res) => {
    let name = req.body.name1;
    let state = req.body.state;

    cameras.create({
        name,
        state
    }).then((cctv) => {
        res.redirect('/cctv/cctv');
    }).catch(err => console.log(err));
})

router.get('/cctv', (req, res) => {
    cameras.findAll({
        order: [
			['title', 'ASC']
		],
		raw: true
    }).then((cctv) => {
        res.render('/cctv/cctv');
    });
});

module.exports = router;