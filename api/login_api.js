// const { message } = require('koa/lib/response');

// router.post('/login', async (ctx) => {
  const login= async (ctx)=>{

    const mongo = require('../dal/index.js').db('CRED');
    
    const ObjectId = require('mongodb').ObjectId;
    const dtbs2 = require('../dal/prod')
    
    
      const {email,password}=ctx.request.body;
    
      const getmaindata = await mongo.collection("user").findOne({
        email
    
      })
      ctx.body = {
        "message": "successfully logged in",
        "response": getmaindata}
      }


    // })
    module.exports={login}

    //working