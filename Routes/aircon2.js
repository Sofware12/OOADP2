const db = require('../config/DBConfig');
const express = require('express');
const router = express();
const aircon = require('../models/aircon');

router.post('/aircon/aircon', (req, res) => {
    let date = req.body.date;
    let time = req.body.time;
    let duration = req.body.duration;
    let temp = req.body.temp;
    let fanspd = req.body.fanspd;

    aircon.create({
        date,
        time,
        duration,
        temp,
        fanspd
    }).then((aircon2) => {
        res.redirect('/aircon/achistory');
    }).catch(err => console.log(err))
})

module.exports = router;