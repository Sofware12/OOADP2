const db = require('../config/DBConfig');
const express = require('express');
const aircon = require('../models/aircon');
const router = express.Router();

router.post('/aircon', (req, res) => {
    let airconname = req.body.currentAC;
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let todaytime = new Date();
    let time = todaytime.getHours() + ':' + todaytime.getMinutes();
    let temp = req.body.tempValue;
    let fanspd = req.body.speed;

    aircon.create({
        airconname: airconname,
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

router.get('/delete', (req, res) => {
    let airconId = req.params.id;
    aircon.destroy({
        truncate: true
    }).then(() => {
        res.redirect('/aircon/achistory');
    })
})

module.exports = router;