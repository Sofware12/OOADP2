const Sequelize = require('sequelize');
const db = require('../config/DBConfig');
/* Creates a curtain(s) table in MySQL Database.
Note that Sequelize automatically pleuralizes the entity name as the table name
*/
const CurtainName = db.define('control', {
    Curtains: {
        type: Sequelize.STRING
    }
});


module.exports = CurtainName 