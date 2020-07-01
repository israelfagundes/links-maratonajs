const express = require('express');
const bcrypt = require('bcrypt');

const { Account } = require('../models'); 

const router = express.Router();

router.get('/sign-in', (req, res) => {
  return res.json('Sign-in');
})

router.get('/sign-up', async (req, res) => {
  const { email, password } = req.body;

  /**
   * Check if account already exists
   */

  const accountExists = await Account.findOne({
    where: {email},
  })

  if (accountExists) {
    return res.status(400).json({ error: 'Account already exists' });
  }
  
  const hash = bcrypt.hashSync(password, 10);
  
  const newAccount = await Account.create({ email, password: hash });
  
  return res.json (newAccount);
});

module.exports = router; 