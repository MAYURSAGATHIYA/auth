const jwt = require("jsonwebtoken");
const config = process.env;


const verifyToken=(ctx,next)=>{
    const token=ctx.headers["x-access-token"];

    if(!token){
         ctx.status=403;
         ctx.body="token is required"
    }

    try{
        const decoded =jwt.verify(token,config.SECRET_KEY)

    }catch(err){
        ctx.status=401;
        ctx.body="invalid token"
    }
    return next();
}

module.exports = verifyToken