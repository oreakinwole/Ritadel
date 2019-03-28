const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const {User} = require('../models/user');

router.get('/', async (req, res) => {
      const allusers = await User.find();
      res.send(allusers );
  });
  
router.post('/', async (req, res) => {
   let user = await User.findOne({ email: req.body.email });
   if (user) return res.status(400).send('User already registerd.');

     const auser = new User({ 
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
      });
      sauser = await auser.save();
      res.send(sauser);  
});

module.exports = router;