require("dotenv").config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const auth = require('./routes/auth');
const meals = require('./routes/meals');
const menu = require('./routes/menu');
const orders = require('./routes/orders');
const users = require('./routes/users');

app.use(express.json());
app.use(express.static('public'));
app.use('/api/auth', auth);
app.use('/api/meals', meals);
app.use('/api/menu', menu);
app.use('/api/orders', orders);
app.use('/api/users', users);

// Check for the presence of the environment variable used for signing the auth token
 if (!process.env.SECRET_KEY) {
    console.error('RITADEL SECRET KEY IS MISSING');
    process.exit(1);
 }

// Connection to MongoDB using mongoose
mongoose.set('useCreateIndex',true);
mongoose.connect('mongodb://localhost/ritadel', { useNewUrlParser: true })
    .then(()=> console.log('Connected to Mongo'))
    .catch(err=> console.error('error happened while trying to connect to MongoDB', err));
  
  // port to be used for app. First option, whatever port provided in the production environment or use port 3000
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Listening on port ${port}...`));