const Sequelize = require('sequelize');
const db = require('../config/DBConfig');

const cctvCameras = db.define('camera', {
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