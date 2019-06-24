const mongoose = require('mongoose');

module.exports = function() {

    // Connection to MongoDB using mongoose
    mongoose.set('useCreateIndex',true);
    mongoose.connect('mongodb://localhost/ritadelmealdb', { useNewUrlParser: true })
    .then(()=> console.info('Connected to Mongo'));
    
};