const express = require('express');
const bcrypt = require('bcrypt');

const { Account } = require('../models'); 
const { accountSignUp } = require('../validators/account');
const { getMessages } = require('../helpers/messages');

const router = express.Router();

router.get('/sign-in', (req, res) => {
  return res.jsonOK(null);
})

router.get('/sign-up', accountSignUp, async (req, res) => {
  const { email, password } = req.body;

  /**
   * Check if account already exists
   */

  const accountExists = await Account.findOne({
    where: {email},
  })

  if (accountExists) {
    return res.jsonBadRequest(null, getMessages('account.signup.email.exists'));
  }
  
  const hash = bcrypt.hashSync(password, 10);
  
  const newAccount = await Account.create({ email, password: hash });
  
  return res.jsonOK(newAccount, getMessages('account.signup.success'));
});

module.exports = router; 