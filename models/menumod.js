const mongoose = require('mongoose');

// Mongoose Validate Menu Schema
const menuSchema = new mongoose.Schema({
    meal: Object
});

const Menu = mongoose.model('Menu', menuSchema);

exports.Menu = Menu;