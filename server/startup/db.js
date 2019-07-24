const mongoose = require('mongoose');
const config = require('config');

module.exports = function() {

    // Connection to MongoDB using mongoose
    // const db = config.get('db');
    /* mongoose.set('useCreateIndex',true);
    mongoose.connect(db, { useNewUrlParser: true }) 
    .then(()=> console.info(`Connected to ${db}`));

    console.info(`Connected to ${db}`); */

    const theList = config.get('oreList');

    console.info(theList);

    
};