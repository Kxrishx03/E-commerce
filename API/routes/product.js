const router = require("express").Router();
const bcrypt = require('bcrypt');
const { verifyToken, verifyTokenAndAdmin,verifyTokenAndAuthentication } = require("./verifyToken");
const  Product = require("../models/Product");


//CREATE 

router.post("/",verifyTokenAndAdmin,async (req,res)=>{
    const newProduct = new Product(req.body);

    try {
        
        const savedProduct = await newProduct.save();

        res.status(200).json({savedProduct});
        
    } catch (err) {
        res.status(500).json({Error:err});
    }
} );


//UPDATE

router.put("/:id",verifyTokenAndAdmin, async(req,res)=>{
 
      try {
        const updateProduct = await Product.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true});

        res.status(200).json({Message:"Success",updateProduct});

      } catch(err) {
          
        res.status(500).json({Error:err});

      }
});

//DELETE

router.delete("/:id", verifyTokenAndAdmin,async (req,res)=>{
        
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({Message:"Product deleted successfully"});
  } catch(err) {
    res.status(500).json({Error:err});
  }

});


//GET PRODUCT

router.get("/find/:id",async (req,res)=>{
     
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({product});

  } catch(err) {
    res.status(500).json({Error:err});
  }
})


//GET ALL USERS

router.get("/",async (req,res)=>{
    const qNew = req.query.new; 
    const qCategory = req.query.category;
  try {

    let products;
    if(qNew){

    //New Products
     products =  await Product.find().sort({_id: -1}).limit(5);

    } else  if(qCategory){

        products = await Product.find({categories:{
             $in:[qCategory]
        }});
    }  else {

        products = await Product.find();
    }

   res.status(200).json({products});

  } catch(err) {
    res.status(500).json({Error:err});
  }
});



module.exports = router;