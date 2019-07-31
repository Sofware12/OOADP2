const db = require('../config/DBConfig')
const express = require('express')
const router = express.Router()
const ccontrol = require("../models/cControl")
const ensureAuthenticated = require('../helpers/auth')

//Add Selected postition and sets
router.post("/", (req, res) => {
    let Left = req.body.Left
    let Right = req.body.Right
    let preset = req.body.preset

    ccontrol.create({
        Left,
        Right,
        preset
    }).then((CControl) => {
        res.render('./curtain/cCLogs',{
            Left,
            Right,
            preset
        })
    }).catch(err => console.log(err))
});

router.get("/", (req, res) => {
    ccontrol.findAll({
        raw: true
    }).then((CControl) => {
        res.render('curtain/cCLogs', {
            CControl
        })
    }).catch(err => console.log(err));
});
