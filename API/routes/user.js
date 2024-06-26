const router = require("express").Router();
const bcrypt = require('bcrypt');
const { verifyToken, verifyTokenAndAdmin,verifyTokenAndAuthentication } = require("./verifyToken");
const User = require("../models/User");


//UPDATE

router.put("/:id",verifyTokenAndAuthentication, async(req,res)=>{

      const password = req.body.password;

      if(password) {
         const salt = await bcrypt.genSalt(10);
         const hash = await bcrypt.hash(password, salt);
         req.body.password = hash;
      }   

      try {

        const updateUser = await User.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true});

        res.status(200).json({Message:"Success"});

      } catch(err) {
          
        res.status(500).json({Error:err});

      }
});

//DELETE

router.delete("/:id", verifyTokenAndAuthentication,async (req,res)=>{
        
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({Message:"User deleted successfully"});
  } catch(err) {
    res.status(500).json({Error:err});
  }

});


//GET USER

router.get("/find/:id",verifyTokenAndAdmin,async (req,res)=>{
     
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({username:user.username,email:user.email});

  } catch(err) {
    res.status(500).json({Error:err});
  }
})


//GET ALL USERS

router.get("/",verifyTokenAndAdmin,async (req,res)=>{
    const query = req.query.new; 
  try {
    const users = query ? await User.find().sort({_id: -1}).limit(5): await User.find();
    res.status(200).json(users.map(user => ({
      username: user.username,
      email: user.email
    })));
  } catch(err) {
    res.status(500).json({Error:err});
  }
});


//GET USER STATS

router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
      const stats = await User.aggregate([
          { $match: { createdAt: { $gte: lastYear } } },
          {
              $project: {
                  month: { $month: "$createdAt" }
              }
          },
          {
              $group: {
                  _id: "$month",
                  total: { $sum: 1 }
              }
          }
      ]);

      res.status(200).json({ data: stats });

  } catch (err) {
      res.status(500).json({ Error: err });
  }
});

module.exports = router;