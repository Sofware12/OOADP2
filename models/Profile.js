const Sequelize = require('sequelize')
const db = require('../config/DBConfig')

const Profile = db.define('profile', {
    uname: {
        type: Sequelize.STRING
    },
    fname: {
        type: Sequelize.STRING
    },
    lname: {
        type: Sequelize.STRING
    },
    Age: {
        type: Sequelize.INTEGER
    },
    Gender: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    phoneNum: {
        type: Sequelize.INTEGER
    },
    bio: {
        type: Sequelize.STRING(500)
    }
});

module.exports = Profile