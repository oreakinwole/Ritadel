require("dotenv").config();
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const authmd = require('../middleware/authmd');
const admin = require('../middleware/admin');
const express = require('express');
const router = express.Router();
const {Order} = require('../models/ordermod');
const { Menu} = require('../models/menumod');
const { User} = require('../models/user');

// All Api Calls for Orders Module
router.get('/', [authmd, admin], async (req, res, next) => {

    try {
        const getOrders = await Order.find();
        res.send(getOrders);
    } catch (ex) {
        next(ex);
    }
});

router.post('/:id', async (req, res) => {
    const today_date = new Date();

    const foodOnMenu = await Menu.findById(req.params.id);
     if (!foodOnMenu) return res.status(404).send('The Meal with the given ID was not found on the Menu');
    

    /*  const token = req.header('x-auth-token');
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    
   
    const finduserEmail = await User.findById(decoded._id);*/
    
     let orderobj = new Order({ 
        menuId: req.params.id,
        name: foodOnMenu.mealItem.name,
        price: foodOnMenu.mealItem.price,
        // byUser: finduserEmail.email,
        date: today_date.toLocaleDateString()
});

     orderobj.markModified('date');
     orderobj = await orderobj.save();
     res.send('done'); 
});  

/* Here, Once this route is called, modified is set to true, meaning, the field 'menuId' contains false information since the name and price fields has been changed. menuId is the Id for the original meal before it was changed */
 router.put('/:id', async (req, res, next) => {
    try {
        const modOrder = await Order.findByIdAndUpdate(req.params.id, {name: req.body.name, modified: true}, { new: true});
        if (!modOrder) return res.status(404).send('The Order with the given ID was not found');

        // To change the price in order collection
        const menulist = await Menu.find();
        const findMatch = menulist.filter(option => option.mealItem.name === req.body.name);
        const theMealItem = findMatch[0].mealItem;
        const matchedPrice = _.pick(theMealItem, 'price');
        const switchPriceOnDb = await Order.findByIdAndUpdate(req.params.id, matchedPrice);

        await modOrder.save();
        await switchPriceOnDb.save();

        res.send('done');
          
        } catch (ex) {
            next(ex);
        }
    
});


module.exports = router;