const db = require('../config/DBConfig');
const express = require('express');
const router = express();
const CCTV = require('../models/cctv');

router.post('/sendFootage', (req, res) => {
    const date = {
        time: today
    }
    let {time} = date;

    cameras.create([
        time
    ])
    .then(name => res.redirect('/viewVideos'))
    .catch(err => console.log(err));
})

module.exports = router;