const Sequelize = require('sequelize');
const db = require('../config/DBConfig');
const user = require('../models/User')
/* Creates a curtain(s) table in MySQL Database.
Note that Sequelize automatically pleuralizes the entity name as the table name
*/
const CurtainControl = db.define('control', {
    Curtains: {
        type: Sequelize.STRING
    }
});

const leftset = db.define('left', {
    left: {
        type: Sequelize.INTEGER
    },
    right: {
        type: Sequelize.INTEGER
    }
});

const rightset = db.define('right', {
    left: {
        type: Sequelize.INTEGER
    },
    right: {
        type: Sequelize.INTEGER
    }
});

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

CurtainControl.belongsTo(user)
module.exports = CurtainControl
module.exports = leftset
module.exports = rightset
module.exports = position