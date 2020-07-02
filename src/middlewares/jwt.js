const { verifyJWT } = require('../helpers/jwt');

const checkJWT = (req, res, next) => {
  let token = req.headers['authorization'];
  
  token = token ? token.slice(7, token.length) : null;

  if (!token) return res.jsonUnauthorized();
  
  try {
    const decoded = verifyJWT(token);
    req.accountId = decoded.id;
  } catch (err) {
    return res.jsonUnauthorized(null, 'Invalid token');
  }
  
  next();
}

module.exports = checkJWT;