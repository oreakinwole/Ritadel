const authmd = require('../middleware/authmd');
const express = require('express');
const router = express.Router();
const {Menu} = require('../models/menumod');
const { Meal} = require('../models/meal');


// All Api Calls for Menu Module

/* get */
router.get('/', authmd, async (req, res) => {
    const getMenu = await Menu.find();
    res.send(getMenu);
});


/* post */
router.post('/:id', [authmd, admin], async (req, res) => {
        const food = await Meal.findById(req.params.id);
        if (!food) return res.status(404).send('The Meal with the given ID was not found');
    
    
        let menuobj = new Menu({ 
            meal: food
    });

         menuobj = await menuobj.save();
         res.send(menuobj);
 });


module.exports = router;