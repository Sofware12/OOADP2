const db = require('../config/DBConfig');
const express = require('express');
const aircon = require('../models/aircon');
const router = express.Router();

router.post('/aircon', (req, res) => {
    let date = req.body.date;
    let time = req.body.time;
    let temp = req.body.temp;
    let fanspd = req.body.fanspd;

    aircon.create({
        date: date,
        time: time,
        temp: temp,
        fanspd: fanspd
    }).then((aircon2) => {
        res.redirect('/aircon');
    }).catch(err => console.log(err))
})

router.get('/achistory', (req, res) => {
    aircon.findAll({
        raw: true
    }).then(DataInfo => {
        console.log(DataInfo);
        res.render('aircon/achistory', {
            DataInfo: DataInfo
        })
    })
})

module.exports = router;