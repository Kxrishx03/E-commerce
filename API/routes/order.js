const router = require("express").Router();
const { verifyToken, verifyTokenAndAdmin,verifyTokenAndAuthentication } = require("./verifyToken");
const Order = require("../models/Order");

//CREATE 

router.post("/",verifyToken,async (req,res)=>{

    const newOrder = new Order(req.body);

    try {
        
        const savedOrder = await newCart.save();

        res.status(200).json({savedOrder});
        
    } catch (err) {
        res.status(500).json({Error:err});
    }
} );


//UPDATE

router.put("/:id",verifyTokenAndAdmin, async(req,res)=>{
 
      try {
        const updateOrder = await Order.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true});

        res.status(200).json({Message:"Success",updateOrder});

      } catch(err) {
          
        res.status(500).json({Error:err});

      }
});

//DELETE

router.delete("/:id", verifyTokenAndAdmin,async (req,res)=>{
        
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json({Message:"Order deleted successfully"});
  } catch(err) {
    res.status(500).json({Error:err});
  }

});


//GET USER ORDERs

router.get("/find/:userId",verifyTokenAndAuthentication,async (req,res)=>{
     
  try {
    const orders = await Order.findOne({
        userId:req.params.userId
    })
    res.status(200).json({orders});

  } catch(err) {
    res.status(500).json({Error:err});
  }
})


// GET ALL

router.get("/",verifyTokenAndAdmin,async (req,res)=>{

    try {
       
        const orders = await Order.find();
        res.status(200).json({orders});
        
    }  catch(err) {
         
        res.status(500).json({Error:err});
    }
});


//GET MONTHY INCOME

router.get("/income", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(lastMonth.setMonth(lastMonth.getMonth() - 1));

    try {
        const income = await Order.aggregate([
            {
                $match: { createdAt: { $gte: previousMonth } }
            },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount"
                }
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" }
                }
            }
        ]);

        res.status(200).json({ income });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


module.exports = router;
