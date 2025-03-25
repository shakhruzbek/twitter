const express = require("express");
const app = express();
const cors = require("cors");

const userRouter = require("./routes/userRoutes");

app.use(express.json());
app.use(cors());



app.use('/user', userRouter)
app.use('/uploads', express.static('uploads'))

const port = 4005
app.listen(port, () => {
  console.log("Serverimiz ishga tushdi");
});
