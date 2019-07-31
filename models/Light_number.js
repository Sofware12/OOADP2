const Sequelize = require('sequelize');
const db = require('../config/DBConfig');



const Light = db.define('Lights_ID', {

    Light_number: {
        type: Sequelize.STRING
    },
    
});


module.exports = Light;