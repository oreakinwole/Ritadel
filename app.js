const mongoose = require('mongoose');
const express = require('express');
const app = express();
const auth = require('./routes/auth');
const meals = require('./routes/meals');
const users = require('./routes/users');

app.use(express.json());
app.use(express.static('public'));
app.use('/api/auth', auth);
app.use('/api/meals', meals);
app.use('/api/users', users);

mongoose.set('useCreateIndex',true);
mongoose.connect('mongodb://localhost/ritadel', { useNewUrlParser: true })
    .then(()=> console.log('Connected to Mongo'))
    .catch(err=> console.error('error happened weyrey', err));
  
  
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Listening on port ${port}...`));