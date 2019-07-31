const db = require('../config/DBConfig')
const express = require('express')
const router = express.Router()
const time = require('../models/cTimed')
const Ambience = require('../models/cAmbience')

//Create table for curtain time
router.post("/", (req, res) =>{
    console.log(req.body);
    let {hour, minute, second, sound} = req.body;

    res.render('./curtain/Logs', {
        hour : req.body.hour,
        minute : req.body.minute,
        second : req.body.second,
        sound : req.body.sound
    });

    time.create({ hour, minute, second, sound})
        .catch(err => console.log(err))
});

// Get data from time function
router.get("/", (req, res) => {
    time.findAll({
    }).then(time=>{
        console.log('Time', time)
            res.render('curtain/Logs', {
                hour: hour,
                minute: minute,
                second: second,
                sound: sound
            })
    }).catch(err => console.log(err))
});

//Ambience Function
router.post("/cAmbience", (req, res) => {
    let ambience = req.body.ambience;

    Ambience.create({
        ambience
    }).then((ambience) => {
        res.render('./curtain/Logs',{
            ambience : ambience
        })
    }).catch(err => console.log(err))
});

//Display Curtain Ambience logs
router.get('/Logs', (req, res) => {

    Ambience.findAll({
        raw: true
    }).then((Ambience) => {
        res.render('/curtain/Logs', {
            ambiences
        });
    }).catch(err => console.log(err));
});



module.exports = router;