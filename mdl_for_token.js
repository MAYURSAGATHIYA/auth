const jwt = require("jsonwebtoken");
const OktaJwtVerifier = require('@okta/jwt-verifier');
// const config = process.env;

const secret_key=process.env.SECRET_KEY
// const q = "aaaa"

const verifyToken = (ctx, next) => {

    
    const token1 = ctx.request.header["authorization"];
    

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
    // console.log("6")
    return next();

}

module.exports = verifyToken


//===================
// const jwt = require("jsonwebtoken");
// const dotenv=require('dotenv').config()

// // const OktaJwtVerifier = require('@okta/jwt-verifier');

// // const { setInternalBufferSize } = require("bson");
// // const config = process.env;

// // const secret_key=process.env.SECRET_KEY
// // const q = "aaaa"

// const verifyToken = (ctx, next) => {

    
//     const token = ctx.request.header["authorization"];
    

//     if (!token) {
//         ctx.status = 403;
//         ctx.body = "PLEASE LOGIN!!!"
//         return

//     }
//     else if (token) {
//       // console.log(token)
//       const bearer = token.split(' '); //malformed
//       const bearerToken = bearer[1];
//       ctx.token = bearerToken;
      
//       if(token==bearerToken){
//         console.log("tokens are samed ")
//       }
// // console.log(bearerToken,"bearer token console")
      
// //      const decoding_var= jwt.verify(ctx.token,'aaaa')
// // console.log(decoding_var,"this is decoding var")
// //       return decoding_var;
    
      
//     } else {
        
//         ctx.status=403;
//         ctx.throw="not valid"
//         return
//       }
    

// //========





    


    

// }

// module.exports = verifyToken



// // const jwt = require("jsonwebtoken");
// // const OktaJwtVerifier = require('@okta/jwt-verifier');
// // // const config = process.env;

// // const secret_key=process.env.SECRET_KEY
// // // const q = "aaaa"

// // const verifyToken = (ctx, next) => {

    
// //     const token1 = ctx.request.header["authorization"];
    

// //     if (!token1) {
// //         ctx.status = 403;
// //         ctx.body = "PLEASE LOGIN!!!"
// //         return

// //     }
//     // if (token) {
//     //     const bearer = token1.split(' '); //malformed
//     //     const bearerToken = bearer[1];
//     //     ctx.token = bearerToken;
        
        
//     //     jwt.verify(ctx.token,process.env.SECRET_KEY)=(err,data)=>{

//     //       if(err){
//     //         ctx.status=403;
//     //         ctx.body={msg:"not valid token"}
//     //       }
//     //       else{
//     //         data:data
//     //           // ctx.status=200;
//     //           // return next()
//     //       }
//     //     }
        
//     //   } 
        
// //         ctx.status=403;
// //         ctx.throw="not valid"
// //         return
// //       }
    