const Sequelize = require('sequelize');
const db = require('../config/DBConfig');

const aircon = db.define('aircon', {
    airconname: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.STRING
    },
    time: {
        type: Sequelize.STRING
    },
    temp: {
        type: Sequelize.STRING
    },
    fanspd: {
        type: Sequelize.STRING
    },
});

module.exports = aircon;