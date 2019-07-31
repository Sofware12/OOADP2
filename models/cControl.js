const Sequelize = require('sequelize');
const db = require('../config/DBConfig');
/* Creates a curtain(s) table in MySQL Database.
Note that Sequelize automatically pleuralizes the entity name as the table name
*/
const cControl = db.define('ccontrol', {
    Left : {
        type: Sequelize.STRING
    },
    Right: {
        type: Sequelize.STRING
    },
    preset: {
        type: Sequelize.STRING
    }
});

module.exports = cControl