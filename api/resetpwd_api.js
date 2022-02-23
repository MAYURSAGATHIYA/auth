
const rst=require('../dal/rstpwd_query')
const rstpwd =  (ctx) => {
  const { password,confirmpassword } = ctx.request.body
  const storing_in_var = { password,confirmpassword }
  const haw =  rst.rstpwd(ctx.params.id, storing_in_var)
  ctx.status = 200;
  ctx.body = "page successfully updated "
  return

}

module.exports={rstpwd}

// const koa = require('koa')
// // const srvr = require('../server')
// const koaRouter = require('koa-router')
// const router = new koaRouter()

// const crypto = require("crypto")
// const bcrypt = require("bcrypt")


// // router.post('/forgotPassword', async (ctx) => {

// const rstpwd=  async (ctx)=>{
//     const service = {
//       async sendToken(ctx) {
//           console.log("rst")
//         let user = await mongo.users.findOne({ email: req.body.email })
//         console.log(user)
//         if (!user) ctx.status(403).ctx.body("User doesnot exists")
  
//         if (user.resetToken) {
//           let data = await mongo.users.update({ email: user.email }, { $unset: { resetToken: 1, resetExpire: 1 } })
//           console.log(data)
//         }
//         // crt str and hashing it
//         let token = crypto.randomBytes(32).toString("hex")   //each byte is converted to the 2-digit base-16 encoding of that byte
//         let hashToken = await bcrypt.hash(token, Number(12))
//         console.log(token, hashToken)
//         let data = await mongo.users.findOneAndUpdate({ email: user.email }, { $set: { resetToken: hashToken } }, { ReturnDocument: "after" })
//         console.log(data)
  
  
//         await ctx.body(user.email, "Password Reset")
  
//       },
//       async verifyToken(ctx, next) {
//         let user = await mongo.users.findOne({ _id: ObjectId(req.params.userId) });
//         if (!user) return ctx.status(400).ctx, body("Invalid link or expired")
  
//         let token = req.params.token
  
//         const isValid = await bcrypt.compare(token, user.resetToken)
//         const expire = user.resetExpire > Date.now()
  
//         if (isValid && expire) {
//           ctx.status(200).ctx.body({ success: true })
//         }
//         else ctx.status(401).ctx.body({ Error: "invalid link or expired" })
//       },
  
  
//       async verifyAndUpdatePassword(ctx, next) {
//         let user = await mongo.users.findOne({ _id: ObjectId(req.params.userId) });
//         if (!user.resetToken) return ctx.status(400).ctx.body("Invalid link or expired")
  
//         let token = req.params.token
  
//         const isValid = await bcrypt.compare(token, user.resetToken)
//         const expire = user.resetExpire > Date.now()
//         console.log(Date.now(), user.resetExpire.getTime(), expire)
//         if (isValid && expire) {
//           const password = req.body.password;
//           const hashPassword = await bcrypt.hash(password, Number(12))
//           console.log(hashPassword)
//           let data = await mongo.users.findOneAndUpdate({ _id: ObjectId(req.params.userId) }, { $set: { password: hashPassword }, $unset: { resetToken: 1, resetExpire: 1 } }, { ReturnDocument: "after" })
//           console.log(data)
//           ctx.status(200).ctx.body("password updated successfully")
//         }
//         else ctx.status(401).ctx.body("Invalid link or expired")
//       }
      
//     }
  
// }


// module.exports={
//     rstpwd
// }