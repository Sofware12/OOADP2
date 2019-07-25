const db = require('../config/DBConfig');
const express = require('express');
const router = express();
const aircon = require('../models/aircon');

/* Creates a user(s) table in MySQL Database.
Note that Sequelize automatically pleuralizes the entity name as the table name
*/

//router.post('/updateValue', (req, res) =>{
//    console.log(req.body);
    
//    aircon.Create...aircon...// res.render('aircon/aircon') //renders views/aircon.handlebars
//    res.sendStatus(200);
//});

module.exports = router;