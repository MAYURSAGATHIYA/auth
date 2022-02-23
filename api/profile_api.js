const mongo = require('../dal/index.js').db('CRED');

const ObjectId = require('mongodb').ObjectId;
const dtbs2 = require('../dal/query')
// const profile=async (ctx)=>{
// // router.post('/profile', async (ctx) => {
//   console.log("2")

//   const {email}=ctx.request.body;

//   const getmaindata = await mongo.collection("user").findOne({
//     email

//   })
//   ctx.body = {
//     "message": "WELCOME TO YOUR PROFILE",
//     "response": getmaindata}
//   // });
// }


const profile_query=require('../dal/profile_query')
//=============================== 
  const createprofile = async (ctx) => {
  
  
      const { profile_id,email,bio,hobbies } = ctx.request.body;
  
  
      const profiledata = { profile_id,email,bio,hobbies }
  
      ctx.body = { msg: "WELCOME TO profile",
        "response":profiledata
    }
      await profile_query.saveforprofile(profiledata);
      // console.log("syccessfukky registred")
  
  }
  
const getprofiles = async (ctx) => {
  const j = await profile_query.getAll();
  ctx.body = j
  return
}

const getprofile = async (ctx) => {
  // console.log(ctx.params.id)
  const gok = await profile_query.getById(ctx.params.id);
  ctx.body = gok
  return

}

const deleteprofile = async (ctx) => {
  
  const scr = await profile_query.removeById(ctx.params.id);
  ctx.body = scr
  ctx.status=200;
  ctx.body="successfully deleted"
 
  return
}
const updateprofile =  (ctx) => {
  const { profile_id,email,bio,hobbies}=ctx.request.body
  const storing_var={ profile_id,email,bio,hobbies}
  const haw =  profile_query.update(ctx.params.id, storing_var)
  // ctx.body = haw
  ctx.status=200;
  ctx.body="successfully updated "
  return

}

module.exports={createprofile,
getprofile,
getprofiles,
deleteprofile,
updateprofile
}
//   //working