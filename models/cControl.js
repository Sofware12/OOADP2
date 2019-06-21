const Sequelize = require('sequelize');
const db = require('../config/DBConfig');
/* Creates a curtain(s) table in MySQL Database.
Note that Sequelize automatically pleuralizes the entity name as the table name
*/
const CurtainControl = db.define('control', {
    addCurtain: {
        type: Sequelize.STRING
    },
})
module.exports = CurtainControl