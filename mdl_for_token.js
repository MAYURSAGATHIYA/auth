const jwt = require("jsonwebtoken");
const OktaJwtVerifier = require('@okta/jwt-verifier');
// const config = process.env;

const secret_key=process.env.SECRET_KEY
// const q = "aaaa"

const verifyToken = (ctx, next) => {

    console.log("1")
    const token1 = ctx.request.header["authorization"];
    console.log(token1)

    // console.log({header: ctx.request.header})
    console.log("2")
    if (!token1) {
        ctx.status = 403;
        ctx.body = "PLEASE LOGIN!!!"
        return

    }
    else if (token1) {
        const bearer = token1.split(' '); //malformed
        const bearerToken = bearer[1];
        ctx.token = bearerToken;
        
      } else {
        
        ctx.status=403;
        ctx.throw="not valid"
        return
      }
    

//========

// const verifying=(ctx,next)=>{
 
//     next()
// }


      //================
    // if (token1) {

    //     const decode = jwt.verify(token1, q);
    //     // console.log(decode,"decoded")

    //     ctx.status=200;
    //     ctx.body="token is valid"
    //     return
    // }
    // else {

    //     // Return response with error
    //   ctx.status=401;
    //   ctx.body="not valid"
    //   return
    // }



    //===================================

    //===================================
    //===================    console.log("9")
    // try{
    //     console.log("5")
    //     // console.log(token)
    //     const decoded = jwt.verify(token,SECRET_KEY)    
    //     console.log(decoded,"decoded")

    // }catch(err){
    //     ctx.status=401;
    //     ctx.body="invalid token"
    //     return
    // }
    //=========================
    console.log("6")
    return next();

}

module.exports = verifyToken
