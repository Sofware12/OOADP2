const Sequelize = require('sequelize');
const db = require('../config/DBConfig');


/* Creates a user(s) table in MySQL Database.
Note that Sequelize automatically pleuralizes the entity name as the table name
*/
const Light = db.define('Lights_ID', {

    Light_number: {
        type: Sequelize.INTEGER
    },
    
});



module.exports = Light;