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

router.get('/cctvEdit/:id', (req, res) => {
    cameras.findOne({
        where: {
            id: req.params.id
        }
    }).then((cameras) => {
        res.render('cctv/cctvEdit', {
            cameras
        });
    }).catch(err => console.log(err));
});
    
router.put('/cctv/savecctvEdit/:id', (req, res) => {
    let id = req.params.id
    let name = req.body.name;
    let state = req.body.state;
    
    cameras.update({
        name: name,
        state: state,
    }, {
        where: {
            id: req.params.id
        }
        }).then(() => {
            res.redirect('/cctv/cctv');
        }).catch(err => console.log(err));
});

module.exports = router;