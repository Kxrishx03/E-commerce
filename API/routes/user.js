const router = require("express").Router();


router.get("/usertest",(req,res)=>{
    res.send("Success")
})

router.post("/userposttest",(req,res)=>{
    const username = req.body.username;

    res.send("Success " + username);
})

module.exports = router;