const Sequelize = require('sequelize');
const db = require('../config/DBConfig');
const express = require('express');
const router =express();

/* Creates a user(s) table in MySQL Database.
Note that Sequelize automatically pleuralizes the entity name as the table name
*/
const Light = db.define('Lights_ID', {

    Light_number: {
        type: Sequelize.INTEGER
    },
    
});



router.get('/addtime',(req,res)=>{
	const data={
		Light_number:200
	}
 
	let { Light_number } = data;


    //insert into table
	lights_ids.create({
		Light_number
	})
      .then(Light_number => res.redirect('/addtime'))
      .catch(err => console.log(err));
      res.send('Completed')

});
module.exports = Light;