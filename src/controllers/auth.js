const express = require('express');
const bcrypt = require('bcrypt');

const { Account } = require('../models'); 
const { accountSignUp, accountSignIn } = require('../validators/account');
const { getMessages } = require('../helpers/messages');
const { generateJWT, generateRefreshJWT } = require('../helpers/jwt');

const router = express.Router();

router.post('/sign-in', accountSignIn, async (req, res) => {
  const { email, password } = req.body;
  
  const account = await Account.findOne({
    where: { email }
  });

  /**
   *  Validate user
   */

  const match = account ? bcrypt.compareSync(password, account.password) : null;

  if (!match) {
    return res.jsonBadRequest(null, getMessages('account.signin.invalid'))
  }
  
  const token = generateJWT({ id: account.id });
  const refreshToken = generateRefreshJWT({ id: account.id });
  
  return res.jsonOK(account, getMessages('account.signin.success'), {token, refreshToken});
})

router.post('/sign-up', accountSignUp, async (req, res) => {
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

  const token = generateJWT({ id: newAccount.id });
  const refreshToken = generateRefreshJWT({ id: newAccount.id });
  
  return res.jsonOK(newAccount, getMessages('account.signup.success'), { token, refreshToken });
});

module.exports = router; 