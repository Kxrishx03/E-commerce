const router = require("express").Router();
const { verifyToken, verifyTokenAndAdmin,verifyTokenAndAuthentication } = require("./verifyToken");
const Cart = require("../models/Cart");

//CREATE 

router.post("/",verifyToken,async (req,res)=>{

    const newCart = new Cart(req.body);

    try {
        
        const savedCart = await newCart.save();

        res.status(200).json({savedCart});
        
    } catch (err) {
        res.status(500).json({Error:err});
    }
} );


//UPDATE

router.put("/:id",verifyTokenAndAuthentication, async(req,res)=>{
 
      try {
        const updateCart = await Cart.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true});

        res.status(200).json({Message:"Success",updateCart});

      } catch(err) {
          
        res.status(500).json({Error:err});

      }
});

//DELETE

router.delete("/:id", verifyTokenAndAuthentication,async (req,res)=>{
        
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json({Message:"Product deleted successfully"});
  } catch(err) {
    res.status(500).json({Error:err});
  }

});


//GET USER CART

router.get("/find/:userId",verifyTokenAndAuthentication,async (req,res)=>{
     
  try {
    const cart = await Cart.findOne({
        userId:req.params.userId
    })
    res.status(200).json({cart});

  } catch(err) {
    res.status(500).json({Error:err});
  }
})


// GET ALL

router.get("/",verifyTokenAndAdmin,async (req,res)=>{

    try {
       
        const carts = await Cart.find();
        res.status(200).json({carts});
        
    }  catch(err) {
         
        res.status(500).json({Error:err});
    }
});


module.exports = router;
