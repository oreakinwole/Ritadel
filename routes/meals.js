const authmd = require('../middleware/authmd');
const admin = require('../middleware/admin');
const {Meal, validate} = require('../models/meal');
const express = require('express');
const router = express.Router();


// All Api Calls for Meals Module

/* get */
router.get('/', [authmd, admin], async (req, res, next) => {
    try {
        const allmeals = await Meal.find();
        res.send(allmeals);
    }
    catch (ex) {
       next(ex);
    }
    
});

/* post */
router.post('/', [authmd, admin], async (req, res, next) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
   
    try {
        let onemeal = new Meal({ 
            name: req.body.name,
            price: req.body.price
        });

        onemeal = await onemeal.save();
        res.send(onemeal);
    } catch (ex) {
        next(ex);
    }
       
});

/* put */
router.put('/:id', [authmd, admin], async (req, res, next) => {
    
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const meal = await Meal.findByIdAndUpdate(req.params.id, {name: req.body.name, price: req.body.price}, { new: true});
        if (!meal) return res.status(404).send('The Meal with the given ID was not found');
        res.send('done');
    } catch (ex) {
        next(ex);
    }
    
});

/* delete*/
router.delete('/:id', [authmd, admin], async (req, res, next) => {

    try {
        const meal = await Meal.findByIdAndRemove(req.params.id);
        if (!meal) return res.status(404).send('The Meal with the given ID was not found');
         
         res.send(meal);
    } catch (ex) {
        next(ex);
    }
  
});

/* get one*/
router.get('/:id', [authmd, admin], async (req, res, next) => {

    try {
        const meal = await Meal.findById(req.params.id);
        if (!meal) return res.status(404).send('The Meal with the given ID was not found');
        res.send(meal);
    } catch (ex) {
        next(ex);
    }
   
});

module.exports = router;