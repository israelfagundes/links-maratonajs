const express = require('express');
const bcrypt = require('bcrypt');

const { Account } = require('../models'); 

const router = express.Router();

router.get('/sign-in', (req, res) => {
  return res.json('Sign-in');
})

router.get('/sign-up', async (req, res) => {
  const email = 'israelfagundes@gmail.com';
  const password = '123546';

  const hash = bcrypt.hashSync(password, 10);
  
  const account = await Account.create({ email, password: hash });
  
  return res.json (account);
});

module.exports = router; 