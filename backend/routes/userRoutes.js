
const express = require("express");
const { user, login, signUp } = require("../controllers/userControllers");
const userRouter = express.Router()

userRouter.get('/:id', user)
userRouter.post('/login', login);
userRouter.post('/signUp', signUp);

module.exports = userRouter