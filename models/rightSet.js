const Sequelize = require('sequelize');
const db = require('../config/DBConfig');
/* Creates a ambience(s) table in MySQL Database.
Note that Sequelize automatically pleuralizes the entity name as the table name
*/
const rightset = db.define('right', {
    left: {
        type: Sequelize.INTEGER
    },
    right: {
        type: Sequelize.INTEGER
    }
});

module.exports = rightset