const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    shortName: {
        type: String
    }
});

const Meal = mongoose.model('Meal', mealSchema);

exports.Meal = Meal;