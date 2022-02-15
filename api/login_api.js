
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const ObjectId = require('mongodb').ObjectId;
const koaRouter = require('koa-router')
const router = new koaRouter()
const dotenv=require('dotenv').config()
console.log(process.env.SECRET_KEY)
const mongo = require('../dal/index.js').db('CRED');
const dtbs2 = require('../dal/query.js')

// const login = async (ctx) => {
//   // try {
//   // Get user input
//   const { email, password } = ctx.request.body;
//===================
//   // Validate user input
//   if (!(email && password)) {
//     ctx.thorw = "All input is required", 403;
//   }
//===================

//   // Validate if user exist in our database
//   //  mongo = await mongo.findOne({ email });



  
//   // if (mongo && (await bcrypt.compare(password, mongo.password))) {
//   //   // Create token
//   //   const token = jwt.sign(
//   //     { user_id: user._id, email },
//   //     process.env.TOKEN_KEY,
//   //     {
//   //       expiresIn: "2h",
//   //     }
//   //   );

//   //   // save user token
//   //   mongo.token = token;


//   //   ctx.status(200).json(mongo);
//   // }
//   // ctx.status(400).send("Invalid Credentials");
//   // // } catch (err) {
//   // //   console.log(err);
//   // // }

// }






//==========================================
//=====================================

  const login= async (ctx)=>{

   
    console.log("1")
      const {email,password}=ctx.request.body;
    
      const getmaindata = await mongo.collection("user").findOne({
        email
    
      })
      console.log("2")
  if (getmaindata &&  (password==getmaindata.password)) {
    // Create token
    console.log("3")
    const token = jwt.sign(
      { user_id: getmaindata._id, email },
      process.env.SECRET_KEY,
      
      {
        expiresIn: "2h",
      }
    );
    getmaindata.token = token;

    console.log("4")
      ctx.body = {
        "message": "successfully logged in",
        "response": getmaindata}
      }
      console.log("5")
  }
    module.exports={login}



//     ACCESS_TOKEN_SECRET=d9e15722f6d3ef802a4bec11e6acb1264ddc9fc2128fa14a75864efdb50c18b62f69d2504e664c9084c28cfa08cf86e1882bb1ff79e084df67a5116c02ccbebe
// REFRESH_TOKEN_SECRET=3fceef0577900b20c3cc33f50b585787dbc7036e4917105229139618ba4d815193cff793bfb2abb5dddaf0f6be9edafae42316785dca5ee66b76308fa0bfd712













//login main
    // const login= async (ctx)=>{

    //   const mongo = require('../dal/index.js').db('CRED');
      
    //   const ObjectId = require('mongodb').ObjectId;
    //   const dtbs2 = require('../dal/query.js')
      
    //     const {email,password}=ctx.request.body;
      
    //     const getmaindata = await mongo.collection("user").findOne({
    //       email
      
    //     })
    //     ctx.body = {
    //       "message": "successfully logged in",
    //       "response": getmaindata}
    //     }
    //   // })
    //   module.exports={login}