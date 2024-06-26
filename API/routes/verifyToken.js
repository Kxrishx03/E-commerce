const jwt = require("jsonwebtoken");

const verifyToken = (req,res,next) => {
    const authHeader = req.headers.token;
 
    if(authHeader){
            const token = authHeader.split(" ")[1];
            jwt.verify(token,process.env.SECRET, (err,user)=>{
            if(err) res.status(403).json({Error:"Token is not valid"});
            req.user = user;
            next();
           })
    } else {
        return res.status(401).json({Error:"You're not authenticated."})
    }
}

const verifyTokenAndAuthentication = (req,res,next) => {
         
    verifyToken(req,res,()=>{

        if(req.user.id === req.params.id || req.user.isAdmin){
              next();
        }  else {
            res.status(401).json({Error:"Authentication failed !"});
        }

    })
}

const verifyTokenAndAdmin = (req,res,next) => {
         
    verifyToken(req,res,()=>{

        if(req.user.isAdmin){
              next();
        }  else {
            res.status(401).json({Error:" Access denied!! !"});
        }

    })
}

module.exports = { 
    verifyToken,
    verifyTokenAndAuthentication,
    verifyTokenAndAdmin };