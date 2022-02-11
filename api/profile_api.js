const mongo = require('../dal/index.js').db('CRED');

const ObjectId = require('mongodb').ObjectId;
const dtbs2 = require('../dal/query')
const profile=async (ctx)=>{
// router.post('/profile', async (ctx) => {
  console.log("2")

  const {email}=ctx.request.body;

  const getmaindata = await mongo.collection("user").findOne({
    email

  })
  ctx.body = {
    "message": "WELCOME TO YOUR PROFILE",
    "response": getmaindata}
  // });
}
module.exports={profile}
  //working