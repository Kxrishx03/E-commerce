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
const paymentRoute = require("./routes/stripe");

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


//CORS error

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

// const cors = require("cors");
// app.use(cors());
//app
app.use(express.json());
app.use("/api/users",userRoute);
app.use("/api/auths",authRoute);
app.use("/api/products",productRoute);
app.use("/api/carts",cartRoute);
app.use("/api/orders",orderRoute);
app.use("/api/checkout",paymentRoute);

app.get('/',(_ , res)=>{
    return res.json({message : 'hello'})
})

