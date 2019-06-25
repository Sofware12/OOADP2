const Sequelize = require('Sequelize');
const db = require('../config/DBConfig');

const cctvCameras = db.define('cameras', {
    name: {
        type: Sequelize.STRING
    },
    footage: {
        type: Sequelize.STRING
    },
    time: {
        type: Sequelize.STRING
    },
});
module.exports = cctvCameras;