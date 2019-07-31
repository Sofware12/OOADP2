// const db = require('../config/DBConfig');
const express = require('express');
const router = express();
const lights_ids = require('../models/Light_number');
const light_logs = require('../models/LightsDate');
const uuidv4 = require('uuid/v1')
const mysql = require('mysql');
const db = mysql.createConnection({
	host: 'localhost',
	user: 'itp211',
	password: 'itp211',
	database: 'smartliving'
});

/* Creates a user(s) table in MySQL Database.
Note that Sequelize automatically pleuralizes the entity name as the table name
*/
router.get('/Logs', (req, res) => {
	light_logs.findAll({
	}).then(light_logs => {
		console.log('Logs:', light_logs)
		res.render('Lights/Logs', {
			State: light_logs
		})
	}).catch(err => console.log(err))
});

// router.get('/addtime',(req,res)=>{
// 	const data={
// 		Light_number:300
// 	}

// 	let { Light_number } = data;


//     //insert into table	
// 	lights_ids.create({
// 		Light_number
// 	})
//       .then(Light_number => res.redirect('/lights'))
//       .catch(err => console.log(err));

// });

router.post('/slidereading', (req, res) => {
	let reading = req.body.reading;
	console.log("received reading = " + reading);
	// todo insert the reading into database
	const log = {
		Light_state: reading
	}

	let { Light_state } = log;

	light_logs.create({
		Light_state
	})


	result = "hello";
	res.send(result);
});










router.post('/Lights', (req, res) => {
	let LightID = uuidv4();




	console.log("received reading = " + LightID);
	// todo insert the reading into database



	lights_ids.create({
		Light_number: LightID
	}).then((light) => {
		result = "hello";
		/* res.render("Lights/Lightss", {
			Light_number
		});*/
		res.redirect("/Lights"

		)
	})




});

// router.get('/Lights', (req, res) => {

// 	lights_ids.findAll({ // SELECT * FROM Light_ids

// 	}
// 	).then((results) => {
// 		console.log('Logs:', results) // each result in results has id and light_number
// 		res.render('Lights/Lightss', {
// 			LightID: results
// 		})
// 	}).catch(err => console.log(err))
// 	});



// router.get('/Logs', (req, res) => {
// 	let sql = 'SELECT * FROM light_logs';
// 	let query = db.query(sql, (err, result) => {
// 		if (err) throw err;
// 		console.log('data inserted into table');
// 		console.log(result[0].Light_state);
// 		test = result[0].Light_state;
// 		test2 = test
// 		console.log(test);
// 	});

// 	console.log(test2);

// });


module.exports = router;