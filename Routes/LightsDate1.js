const db = require('../config/DBConfig');
const express = require('express');
const router =express();
const lights_ids=require('../models/LightsDate');


/* Creates a user(s) table in MySQL Database.
Note that Sequelize automatically pleuralizes the entity name as the table name
*/


router.get('/addtime',(req,res)=>{
	const data={
		Light_number:200
	}
 
	let { Light_number } = data;


    //insert into table
	lights_ids.create({
		Light_number
	})
      .then(Light_number => res.redirect('/lights'))
      .catch(err => console.log(err));

});

router.post('/slidereading', (req,res) => {
	let reading = req.body.reading;
	console.log("received reading = " + reading);
	// todo insert the reading into database
	
	result = "hello";
	res.send(result);
});

module.exports = router;