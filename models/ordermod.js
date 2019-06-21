const mongoose = require('mongoose');

// Mongoose Validate Order Schema
const orderSchema = new mongoose.Schema({
    order: Object
});

const Order = mongoose.model('Order', orderSchema);

exports.Order = Order;