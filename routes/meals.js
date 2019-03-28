const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const {Meal} = require('../models/meal');

router.get('/', async (req, res) => {
    const allmeals = await Meal.find();
    res.send(allmeals);
});

router.post('/', async (req, res) => {
    let onemeal = new Meal({ name: req.body.name });
    onemeal = await onemeal.save();
    res.send(onemeal);   
});

module.exports = router;