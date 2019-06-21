const authmd = require('../middleware/authmd');
const admin = require('../middleware/admin');
const express = require('express');
const router = express.Router();
const {Order} = require('../models/ordermod');
const { Menu} = require('../models/menumod');

// All Api Calls for Orders Module
router.get('/', [authmd, admin], async (req, res) => {
    const getOrders = await Order.find();
    res.send(getOrders);
});

router.post('/:id', async (req, res) => {
    const foodOnMenu = await Menu.findById(req.params.id);
    if (!foodOnMenu) return res.status(404).send('The Meal with the given ID was not found on the Menu');


    let orderobj = new Order({ 
        order: foodOnMenu
});
     orderobj = await orderobj.save();
     res.send(orderobj);
     
});


/*  router.put('/:id', async (req, res) => {
    const modOrder = await Order.findByIdAndUpdate(req.params.id, {name: req.body.name, price: req.body.price}, { new: true});
    if (!modOrder) return res.status(404).send('The Ord with the given ID was not found');

    res.send(modOrder);
});*/


module.exports = router;