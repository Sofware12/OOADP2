// const db = require("../config/DBConfig")
// const express = require("express")
// const router = express.Router();
// const passport = require("passport")
// const cControl = require("../models/cControl")

// router.use(passport.initialize());
// router.use(passport.session());

// router.post('/curtainn', (req, res) => {
// 	const userId = req.user.id
// 	cControl.findAll({
// 		where: {
// 			userId: userId
// 		}
// 	}).then(Success => {
// 		if (Success.length == 0) {
// 			cControl.create({
// 				Curtains: 1,
// 				userId: userId
// 			})
// 		}
// 		else {
// 			cControl.findAll({
// 				attributes: [
// 					'Curtains',
// 				],
// 				where: {
// 					userId: userId
// 				}
// 			}).then(Success => {
// 				console.log("CHICKEN: ",Success[0].Curtains)
// 				cControl.update(
// 					{Curtains: Success[0].Curtains+1},
// 					{where: {userId: userId}
// 				})
// 				console.log(Success[0].Curtains+1)
// 				res.render('curtain/cControl', {NoCurtain: Success[0].Curtains+1})
// 			})
// 		}
// 	});
// 	res.redirect('/curtainControl')
// }); 
