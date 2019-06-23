const mongoose = require('mongoose');

// Mongoose Validate Order Schema
const orderSchema = new mongoose.Schema({
    menuId: {
        type: String,
        required: true,
        minlength: 1
    },
    name: {
        type: String,
        required: true,
        minlength: 1
    },
    price: {
        type: Number,
        required: true,
        minlength: 1
    },
    modified: {
        type: Boolean,
        required: true,
        default: false
    },
   /*  byUser: {
        type: String,
        required: true,
        minlength: 1
    }, */
    date: {
        type: String,
        required: true,
        minlength: 1
    }
});

const Order = mongoose.model('Order', orderSchema);

exports.Order = Order;