const Sequelize = require('sequelize');
const db = require('../config/DBConfig');


/* Creates a user(s) table in MySQL Database.
Note that Sequelize automatically pleuralizes the entity name as the table name
*/


const lightLog = db.define('light_log', {
 
    Light_number: {
        type: Sequelize.STRING
    },

    Light_state: {
        type: Sequelize.INTEGER
    },

    Time: {
        type: Sequelize.DATE
    },
    
});



module.exports = lightLog;