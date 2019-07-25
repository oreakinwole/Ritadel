const mongoose = require('mongoose');
const config = require('config');

module.exports = function() {

    // Connection to MongoDB using mongoose

    if (process.env.NODE_ENV === 'production') {
        const db = config.get('dbProd');
        mongoose.set('useCreateIndex',true);
        mongoose.connect(db, { useNewUrlParser: true }) 
        .then(()=> console.info(`Connected to ${db}`));

        console.info(`Connected to ${db}`);
        

    } else {
        const db = config.get('db');
        mongoose.set('useCreateIndex',true);
        mongoose.connect(db, { useNewUrlParser: true }) 
        .then(()=> console.info(`Connected to ${db}`));

        console.info(`Connected to ${db}`);
    }
    
       
};

