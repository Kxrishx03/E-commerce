const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

//IMPORTING ROUTES
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");

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
app.use("/api/auths",authRoute);
app.use("/api/products",productRoute);
app.use("/api/carts",cartRoute);
app.use("/api/orders",orderRoute);

