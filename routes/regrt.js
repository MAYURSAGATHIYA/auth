const koa = require('koa')
const koaRouter = require('koa-router')
const session = require('koa-session');
const router = new koaRouter()
const mdlwr = require('../middleware')
const vldt = require('../validate.js')
const crypto=require("crypto")
const bcrypt=require("bcrypt")
router.get('/home', (context) => {
  context.body = "Welcome to my Koa.js Server"
})


console.log("1")
router.post('/register', mdlwr, (ctx) => {
  console.log("2")


  let { first, last, email, password, confirmPassword } = ctx.request.body //wobp mdwr

  if (!(first && last && email && password && confirmPassword)) {
    throw 'All fields are required'
  }
  let index;
  if (index = CRED.findIndex((e) => e.id === email)) {
    throw 'this email already used'
  }

  if (password !== confirmPassword) {
    throw 'Passwords must match'
  }

  //DB 
  try {
    console.log("db")
    const user = CRED.create(sanitize({ //rmv illgl char from data 
      first, last, email, password
    }))
    console.log("db2")
    ctx.session.user = {  //st
      first: user.first,
      last: user.last,
      email: user.email
    }
    console.log("db3")
    ctx.redirect('/profile')
    console.log("db4")
  } catch (err) {
    // ctx.session.errorMessage= 'invalid details pls enter prpr details' 
    // errorMessage=ctx.session.errorMessage= 'invalid details pls enter prpr details' ;
    // ctx.session.errorMessage = 'invalid details pls enter prpr details'
    ctx.throw(400, 'not valid')

    ctx.redirect('/register')
  }
})


router.post('/login', async (ctx) => {

  const { email, password } = ctx.request.body
  if (!(email && password)) {
    throw 'All fields are required'
  }

  try {

    const user = await User.authenticate(sanitize({ email, password }))

    ctx.session.user = user
    ctx.redirect('/profile')

  } catch (err) {
    ctx.session.errorMessage = err
    ctx.redirect('/login')
  }
})




// console.log("1")
// router.get('/register', async (ctx)=>{
//     console.log("2")
//     // if(typeof(errorMessage) == 'undefined') {
//     //     ctx.body = "errorr";
//     //   }
//   await ctx.render('register', {
//     csrfToken: ctx.csrf,
//     errorMessage: ctx.session.errorMessage,


//   })
//   console.log("3")

//   ctx.session.errorMessage = ''  //rst err msgs
//  })

// router.get('/login', async (ctx)=>{                                  
//   await ctx.render('login', {
//     csrfToken: ctx.csrf,
//     errorMessage: ctx.session.errorMessage
//   })

//   //eventually reset error messages
//   ctx.session.errorMessage = ''
// })





//reg

// async register(ctx) {
//     const { body } = ctx.request;
//     try {
//       if (!body.username || !body.password) {
//         ctx.status = 400;
//         ctx.body = {
//           error: `expected an object with username, password but got: ${body}`,
//         }
//         return;
//       }
//       body.password = await bcrypt.hash(body.password, 5)
//       let user = await User.find({ username: body.username });
//       if (!user.length) {
//         const newUser = new User(body);
//         user = await newUser.save();
//         ctx.status = 200;
//         ctx.body = {
//           Message: 'registration succeeded',
//           user,
//         }
//       } else {
//         ctx.status = 406;
//         ctx.body = {
//           Message: 'user name already exists',
//         }
//       }
//     } catch (error) {
//       ctx.throw(500)
//     }
//   }


// //login
// async login(ctx) {
//     const { body } = ctx.request
//     try {
//       const user = await User.findOne({ username: body.username });
//       if (!user) {
//         ctx.status = 401
//         ctx.body = {
//           Message: 'user name error',
//         }
//         return;
//       }
//       //Is the matching password equal
//       if (await bcrypt.compare(body.password, user.password)) {
//         ctx.status = 200
//         ctx.body = {
//           Message: 'login succeeded',
//           user: user.userInfo,
//           //The token is generated and returned to the client
//           token: jsonwebtoken.sign({
//             data: user,
//             //Set token expiration time
//             exp: Math.floor(Date.now() / 1000) + (60 * 60), // 60 seconds * 60 minutes = 1 hour
//           }, secret),
//         }
//       } else {
//         ctx.status = 401
//         ctx.body = {
//           Message: 'password error',
//         }
//       }
//     } catch (error) {
//       ctx.throw(500)
//     }
//   }
router.get('/profile', async (ctx) => {

  const { first, last, email } = ctx.session.user
  await ctx('profile', {
    first, last, email,
    errorMessage: ctx.session.errorMessage
  })
  ctx.session.errorMessage = 'rst'
})
//reset passwd

// const service= {

//   async sendToken(req,res,next){
//       let user= await mongo.users.findOne({email:req.body.email})
//       console.log(user)
//       if(!user) res.status(400).send("User doesnot exists")

//       if(user.resetToken) 
//       {
//           let data= await mongo.users.update({email:user.email},{$unset:{resetToken:1,resetExpire:1}})
//           console.log(data)
//       }
//       // creating a string and hashing using bcrypt
//       let token=crypto.randomBytes(32).toString("hex")
//       let hashToken=await bcrypt.hash(token,Number(12))
//       console.log(token,hashToken)
//       //creating expiry after 1 hour
//       let expiry= new Date(Date.now()+ (1*3600*1000) )
//       //updating the users table with resetToken and resetExpire
//       let data= await mongo.users.findOneAndUpdate({email:user.email},{$set:{resetToken:hashToken,resetExpire:expiry}},{ReturnDocument: "after" })
//       console.log(data)

//       const link=`https://gracious-keller-611545.netlify.app/resetPassword/${user._id}/${token}`

//       await sendMail(user.email,"Password Reset",link)

//       res.status(200).send("Link sent to email")  
//   },
//   async verifyToken(req,res,next){
//       let user= await mongo.users.findOne({_id:ObjectId(req.params.userId)});
//   if(!user) return res.status(400).send("Invalid link or expired")

//   let token=req.params.token

//   const isValid= await bcrypt.compare(token,user.resetToken)
//   const expire =   user.resetExpire > Date.now()

//   if( isValid &&  expire ){
//       res.status(200).send({success:true})
//   }
//   else res.status(400).send({Error:"invalid link or expired"})
//   },


//   async verifyAndUpdatePassword(req,res,next){
//       let user= await mongo.users.findOne({_id:ObjectId(req.params.userId)});
//   if(!user.resetToken) return res.status(400).send("Invalid link or expired")

//   let token=req.params.token

//   const isValid= await bcrypt.compare(token,user.resetToken)
//   const expire =   user.resetExpire > Date.now()
//    console.log(Date.now(), user.resetExpire.getTime(),expire)
//    if( isValid &&  expire )
//    {
//        const password =req.body.password;
//        const hashPassword =await bcrypt.hash(password,Number(12))
//        console.log(hashPassword)
//        let data= await mongo.users.findOneAndUpdate({_id:ObjectId(req.params.userId)},{$set:{password:hashPassword},$unset:{resetToken:1,resetExpire:1}},{ReturnDocument: "after" })
//        console.log(data)
//        res.status(200).send("password updated successfully")
//    }
//    else res.status(400).send("Invalid link or expired")
//   }
// }

router.post('/forgotPassword', async (ctx) => {

  

  const service = {
    async sendToken(ctx) {
      let user = await mongo.users.findOne({ email: req.body.email })
      console.log(user)
      if (!user) ctx.status(403).ctx.body("User doesnot exists")

      if (user.resetToken) {
        let data = await mongo.users.update({ email: user.email }, { $unset: { resetToken: 1, resetExpire: 1 } })
        console.log(data)
      }
      // crt str and hashing it
      let token = crypto.randomBytes(32).toString("hex")   //each byte is converted to the 2-digit base-16 encoding of that byte
      let hashToken = await bcrypt.hash(token, Number(12))
      console.log(token, hashToken)
      let data = await mongo.users.findOneAndUpdate({ email: user.email }, { $set: { resetToken: hashToken } }, { ReturnDocument: "after" })
      console.log(data)


      await ctx.body(user.email, "Password Reset")

    },
    async verifyToken(ctx, next) {
      let user = await mongo.users.findOne({ _id: ObjectId(req.params.userId) });
      if (!user) return ctx.status(400).ctx,body("Invalid link or expired")

      let token = req.params.token

      const isValid = await bcrypt.compare(token, user.resetToken)
      const expire = user.resetExpire > Date.now()

      if (isValid && expire) {
        ctx.status(200).ctx.body({ success: true })
      }
      else ctx.status(401).ctx.body({ Error: "invalid link or expired" })
    },


    async verifyAndUpdatePassword(ctx, next) {
      let user = await mongo.users.findOne({ _id: ObjectId(req.params.userId) });
      if (!user.resetToken) return ctx.status(400).ctx.body("Invalid link or expired")

      let token = req.params.token

      const isValid = await bcrypt.compare(token, user.resetToken)
      const expire = user.resetExpire > Date.now()
      console.log(Date.now(), user.resetExpire.getTime(), expire)
      if (isValid && expire) {
        const password = req.body.password;
        const hashPassword = await bcrypt.hash(password, Number(12))
        console.log(hashPassword)
        let data = await mongo.users.findOneAndUpdate({ _id: ObjectId(req.params.userId) }, { $set: { password: hashPassword }, $unset: { resetToken: 1, resetExpire: 1 } }, { ReturnDocument: "after" })
        console.log(data)
        ctx.status(200).ctx.body("password updated successfully")
      }
      else ctx.status(401).ctx.body("Invalid link or expired")
    }
  }

})

module.exports = router;


