const Sequelize = require('sequelize');
const db = require('../config/DBConfig');
/* Creates a ambience(s) table in MySQL Database.
Note that Sequelize automatically pleuralizes the entity name as the table name
*/
const CurtainAmbience = db.define('ambience', {
    ambience : {
        type: Sequelize.STRING
    }
});


module.exports = CurtainAmbience