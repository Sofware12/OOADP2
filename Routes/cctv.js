const db = require('../config/DBConfig');
const express = require('express');
const router = express();
const CCTV = require('../models/cctv');

router.get('/sendFootage', (req, res) => {
    const data = {
        name: "Camera 1"
    }
    let {name} = data;

    CCTV.create([
        name
    ])
    .then(name => res.redirect('/viewVideos'))
    .catch(err => console.log(err));
})

module.exports = router;