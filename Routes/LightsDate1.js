const db = require('../config/DBConfig');
const express = require('express');
const router =express();
const lights_ids=require('../models/LightsDate');
const light_logs=require('../models/LightsDate')


/* Creates a user(s) table in MySQL Database.
Note that Sequelize automatically pleuralizes the entity name as the table name
*/
router.get('/Logs',(req,res)=> {
	light_logs.findAll({
	}).then(light_logs=>{
		console.log('Logs:',light_logs)
			 res.render('Lights/Logs',{
				 State: light_logs
			 })
	}).catch(err=> console.log(err))
	});

router.get('/addtime',(req,res)=>{
	const data={
		Light_number:300
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
	const log={
		Light_state:reading
	}
	
	let { Light_state } =log;
	
	light_logs.create({
		Light_state
	})
	
	  
	result = "hello";
	res.send(result);
}); 






module.exports = router;