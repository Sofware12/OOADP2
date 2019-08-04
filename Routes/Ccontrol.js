const db = require('../config/DBConfig')
const express = require('express')
const router = express.Router()
const ccontrol = require("../models/cControl")
const ensureAuthenticated = require('../helpers/auth')
const alertMessage = require('../helpers/messanger')

router.get('/', (req,res) => {
    ccontrol.findAll ({
    }).then((controls) => {
        res.render('curtain/cCLogs', {
            controls
        })
    })
});

router.post("/", (req, res) => {
    let Left = req.body.Left
    let Right = req.body.Right 
    let preset = req.body.preset

    ccontrol.create({
        Left,
        Right,
        preset
    }).then((CControl) => {
        ccontrol.findAll({
            raw: true
        }).then((controls) => {
            res.render('curtain/cCLogs', {
                controls
            })
        }).catch(err => console.log(err))
    })
});


router.get('/curtain/delete/:id', ensureAuthenticated, (req,res) => {
    let ccontrolId = req.params.id;
    ccontrol.findOne({
        where: {
            id: ccontrolId
        },
        attributes: ['id', 'id']
    }).then((ccontrol) => {
        ccontrol.destroy({
            where: {
                id: ccontrolId
            }
        }).then(() => {
            alertMessage(res, 'info', 'The history has been deleted', 'far fa-trash-alt', true);
            res.redirect('/cControl');
        }).catch(err => console.log(err));
    });
});

module.exports = router;