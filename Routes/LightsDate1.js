const express = require('./node_modules/express');
const router = express.Router();
const Light1=require('../models/LightsDate')


router.get('/'), (res, req) => {
    res.render('/Lights');
}

router.post('/Lights'), (res, req) =>{
    const On = Date();
    const Off = Date();
    Light1.create({
        On,
        Off
    })
    console.log(Date)
    res.redirect("/home")

}