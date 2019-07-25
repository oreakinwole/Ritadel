const express = require('express');
const auth = require('../routes/auth');
const meals = require('../routes/meals');
const menu = require('../routes/menu');
const orders = require('../routes/orders');
const users = require('../routes/users');
const error = require('../middleware/error');


module.exports = function(app) {

    app.use(express.json());
    app.use(express.static('public'));
    app.use('/api/auth', auth);
    app.use('/api/meals', meals);
    app.use('/api/menu', menu);
    app.use('/api/orders', orders);
    app.use('/api/users', users);
    app.use(error);

};