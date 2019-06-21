const Joi = require('joi');
const mongoose = require('mongoose');


// Joi Validate Meal Schema
function validateMeal(meal) {
    const schema = {
        name:Joi.string().min(1).max(100).required(),
        price:Joi.number().min(1).max(200).required()
    }; 
    return Joi.validate(meal, schema);
}

// Mongoose Validate Meal Schema
const mealSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 100
    },
    price: {
        type: Number,
        required: true,
        minlength: 1,
        maxlength: 200
    }
});

const Meal = mongoose.model('Meal', mealSchema);

exports.Meal = Meal;
exports.validate = validateMeal;