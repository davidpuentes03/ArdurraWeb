const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'secret_key';

function auth(req, res, next) {
  const token = req.header('x-auth-token') || req.header('authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ msg: 'No autorizado, token faltante' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // { id: userId, iat, exp }
    next();
  } catch (err) {
    return res.status(401).json({ msg: 'Token inválido' });
  }
}

module.exports = auth;
