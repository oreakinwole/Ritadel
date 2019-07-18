const _ = require('lodash');
const admin = require('../middleware/admin');
const authmd = require('../middleware/authmd');
const express = require('express');
const router = express.Router();
const {Menu} = require('../models/menumod');
const { Meal} = require('../models/meal');


// All Api Calls for Menu Module

/* get */
router.get('/', authmd, async (req, res, next) => {
    try {
        const getMenu = await Menu.find();
        const menuResults = _.map(getMenu, function(currentMenuItem) {
            return _.pick(currentMenuItem, 'mealItem.name', 'mealItem.price');
        });
        res.send(menuResults);
    } catch (ex) {
        next(ex);
    }
    
});


/* post */
router.post('/:id', [authmd, admin], async (req, res, next) => {

    try {
        const food = await Meal.findById(req.params.id);
        if (!food) return res.status(404).send('The Meal with the given ID was not found');

         let menuobj = new Menu({ 
            mealItem: food
    });
        menuobj = await menuobj.save();
         res.send('done'); 
    } catch (ex) {
        next(ex);
    }
 });
 

module.exports = router;
