const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

//IMPORTING ROUTES
const userRoute = require("./routes/user");



//connect to db
mongoose.connect(process.env.MONGO_URI,{
    dbName: 'ecommerceDB',
  })
.then(()=>{
    console.log("Connection succesfull");
    app.listen(PORT || 5000,()=>{
        console.log("Running on : " + PORT);
    })
});


//app
app.use(express.json());
app.use("/api/users",userRoute);




