const db = require('../config/DBConfig')
const express = require('express')
const router = express.Router()
const ambience = require('../models/cAmbience')

router.post("/", (req, res) =>{
    ambience.create({
        ambience: req.body.ambience
    })
    res.render('./curtain/Logs')
});

router.get("/", (req, res) =>{

})

module.exports = router;