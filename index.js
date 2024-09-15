const express = require('express');
const fs = require('fs');
const User = require("./models/user");
const userRouter = require("./routes/user");

const app = express();

app.use(express.json());

app.use("/users", userRouter);

app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
});