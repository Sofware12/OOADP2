const db = require('../config/DBConfig')
const express = require('express')
const router = express.Router()
const Ambience = require('../models/cAmbience')
const ensureAuthenticated = require('../helpers/auth')
const alertMessage = require('../helpers/messanger')

router.get('/cAmbience', (req, res) => {
    Ambience.findAll({
    }).then((ambiences) => {
        res.render('curtain/Logs', {
            ambiences
        })
    })
});
router.post("/cAmbience", (req, res) => {
    let ambience = req.body.ambience
    let hour = req.body.hour
    let minute = req.body.minute
    let second = req.body.second

    Ambience.create({
        ambience,
        hour,
        minute,
        second,
    }).then((CTimed) => {
        Ambience.findAll({
            raw: true
        }).then((ambiences) => {
            res.render('curtain/Logs', {
                ambiences
            })
        }).catch(err => console.log(err))
    })
});

router.get('/curtain/delete/:id', ensureAuthenticated, (req, res) => {
    let ambienceId = req.params.id;
    Ambience.findOne({
        where: {
            id: ambienceId
        },
        attributes: ['id', 'id']
    }).then((ambiences) => {
        Ambience.destroy({
            where: {
                id: ambienceId
            }
        }).then(() => {
            alertMessage(res, 'info', 'The history has been deleted', 'far fa-trash-alt', true);
            res.redirect('/Ctimed/cAmbience');
        }).catch(err => console.log(err));
    });
});

module.exports = router;