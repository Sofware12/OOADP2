const Sequelize = require('sequelize');
const db = require('../config/DBConfig');
/* Creates a ambience(s) table in MySQL Database.
Note that Sequelize automatically pleuralizes the entity name as the table name
*/
const position = db.define('set', {
    cover: {
        type: Sequelize.STRING
    },
    half: {
        type: Sequelize.STRING
    },
    open: {
        type: Sequelize.STRING
    }
});

module.exports = position