const Sequelize = require('sequelize');
const db = require('../config/DBConfig');
const user = require('../models/User')
/* Creates a curtain(s) table in MySQL Database.
Note that Sequelize automatically pleuralizes the entity name as the table name
*/
const CurtainControl = db.define('control', {
    Curtains: {
        type: Sequelize.INTEGER
    },
})

CurtainControl.belongsTo(user)
module.exports = CurtainControl