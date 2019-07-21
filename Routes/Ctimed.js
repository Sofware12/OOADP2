const db = require('../config/DBConfig')
const express = require('express')
const router = express.Router()
const time = require('../models/cTimed')

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
}) 

module.exports = router;