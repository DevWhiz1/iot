const jwt = require('jsonwebtoken');
const JWT_SECRET_Key='JWT_SECRET=home_users'
const JWT_SECRET= process.env.JWT_SECRET
const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({msg: "Unauthorized. Please add valid token"});
  }

  const token = authHeader.split(' ')[1]

  try {
    const decoded = jwt.verify(token, JWT_SECRET_Key)
    const { id, name } = decoded
    req.user = { id, name }
    next()
  } catch (error) {
    return res.status(401).json({msg: "Unauthorized. Please add valid token"});
  }
}

module.exports = authenticationMiddleware