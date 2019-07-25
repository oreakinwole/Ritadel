const mongoose = require('mongoose');
const {mealSchema} = require('./meal');

// Mongoose Validate Menu Schema
const menuSchema = new mongoose.Schema({
    mealItem: mealSchema
       
});

const Menu = mongoose.model('Menu', menuSchema);

exports.Menu = Menu;