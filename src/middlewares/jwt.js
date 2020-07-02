const { verifyJWT } = require('../helpers/jwt');

const checkJWT = (req, res, next) => {
  const { url: path } = req;

  const excludedPaths = ['/auth/sign-in', '/auth/sign-up'];

  const isExcluded = !!excludedPaths.find(p => p.startsWith(path));

  if (isExcluded) return next();
  
  let token = req.headers['authorization'];
  
  token = token ? token.slice(7, token.length) : null;

  if (!token) return res.jsonUnauthorized(null, 'Invalid token');
  
  try {
    const decoded = verifyJWT(token);
    req.accountId = decoded.id;
  } catch (err) {
    return res.jsonUnauthorized(null, 'Invalid token');
  }

  next();
}

module.exports = checkJWT;