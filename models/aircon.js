const Sequelize = require('sequelize');
const db = require('../config/DBConfig');

const aircon = db.define('aircon', {
    date: {
        type: Sequelize.STRING
    },
    time: {
        type: Sequelize.STRING
    },
    duration: {
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