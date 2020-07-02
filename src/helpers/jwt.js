require('dotenv').config();
const jwt = require('jsonwebtoken');

const tokenPrivateKey = process.env.JWT_TOKEN;
const refreshTokenPrivateKey = process.env.JWT_REFRESH_TOKEN;
const options = { expiresIn: '30 minutes' };
const refreshOptions = { expiresIn: '30 days' };

const generateJWT = (payload) => {
  return jwt.sign(payload, tokenPrivateKey, options);
};

const generateRefreshJWT = (payload) => {
  return jwt.sign(payload, refreshTokenPrivateKey, refreshOptions);
};

const verifyJWT = token => {
  return jwt.verify(token, tokenPrivateKey);
}

const verifyRefreshJWT = token => {
  return jwt.verify(token, refreshTokenPrivateKey);
}

const getTokenFromHeaders = headers => {
  const token = headers['authorization'];
  return token ? token.slice(7, token.length) : null;
}

module.exports = { generateJWT, generateRefreshJWT, verifyJWT, verifyRefreshJWT, getTokenFromHeaders };