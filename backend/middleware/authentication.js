const jwt = require('jsonwebtoken');

exports.authentication = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.split(" ")[1]
  if (!token) {
    return res.status(401).json({message: 'Token berilmadi'})
  }
  const check = jwt.verify(token, "HELLO WORLD")
  next()
  } catch (error) {
    if(error.name == "JsonWebTokenError"){
      return res.status(401).json({message: 'Token xato'})
    }
    if(error.name == "TokenExpiredError"){
      return res.status(401).json({message: 'Eskirgan token'})
    }
    return res.status(401).json({message: error.message})
  }
}