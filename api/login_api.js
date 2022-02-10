
// router.post('/login', async (ctx) => {
  const login= async (ctx)=>{

    const mongo = require('../dal/index.js').db('CRED');
    
    const ObjectId = require('mongodb').ObjectId;
    const dtbs2 = require('../dal/prod')
    
    
      const {email,password}=ctx.request.body;
    try{
      const getmaindata = await mongo.collection("user").findOne({
        email,password
    
      })
      ctx.body = {
        "message": "successfully logged in",
        "response": getmaindata
      }
    }catch(err){
      ctx.body = {
        "message": "please enter valid id and password",
       
      }
  }
}
    // })
    module.exports={login}

    //working