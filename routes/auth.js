const Joi = require('joi');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const {User} = require('../models/user');

function validate(req) {
    const schema = {
        email:Joi.string().min(1).max(200).required().email(),
        password:Joi.string().min(5).max(1024).required()
    }; 
    return Joi.validate(req, schema);
}

// All Api Calls for Auth Module
  
/* post */
router.post('/', async (req, res, next) => {

    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        let user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(400).send('Invalid email or password.');
    
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if(!validPassword) return res.status(400).send('Invalid email or password.'); 
        
        const token = user.generateAuthToken();
        res.send(token);
    } catch (ex) {
        next(ex);
    }

});



module.exports = router;