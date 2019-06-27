const Sequelize = require('sequelize');
const db = require('../config/DBConfig');
/* Creates a curtain(s) table in MySQL Database.
Note that Sequelize automatically pleuralizes the entity name as the table name
*/
const CurtainTimed = db.define('time', {
    hour : {
        type: Sequelize.INTEGER
    },
    minute : {
        type: Sequelize.INTEGER
    },
    second: {
        type: Sequelize.INTEGER
    }
});

const Cambience = db.define('ambience', {
    day: {
        type: Sequelize.STRING
    },
    night: {
        type: Sequelize.STRING
    },
    party: {
        type: Sequelize.STRING
    },
    movie: {
        type: Sequelize.STRING
    }
});


module.exports = CurtainTimed
module.exports = Cambience