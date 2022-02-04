const koa = require('koa')
const srvr = require('../server')
const koaRouter = require('koa-router')
// const session = require('koa-session');   //other
const router = new koaRouter()
const mdlwr = require('../middleware')
const vldt = require('../validate.js') //dont use
const crypto = require("crypto")
const bcrypt = require("bcrypt")
router.get('/home', (context) => {
  context.body = "Welcome to my Koa.js Server"
})


//register main 
// console.log("1")
// router.post('/register',  (ctx,mdlwr) => {
//   console.log("2")


//   let { first, last, email, password, confirmPassword } = ctx.request.body //wobp mdwr

//   if (!(first && last && email && password && confirmPassword)) {
//     throw 'All fields are required'
//   }
//   let index;
//   if (index = CRED.findIndex((e) => e.id === email)) {
//     throw 'this email already used'
//   }

//   if (password !== confirmPassword) {
//     throw 'Passwords must match'
//   }
//   mdlwr()

//   //DB 
//   try {
//     console.log("db")
//     const user = CRED.create(sanitize({ //rmv illgl char from data 
//       first, last, email, password
//     }))
//     console.log("db2")
//     ctx.session.user = {  //st
//       first: user.first,
//       last: user.last,
//       email: user.email
//     }
//     console.log("db3")
//     ctx.redirect('/profile')
//     console.log("db4")
//   } catch (err) {
//     // ctx.session.errorMessage= 'invalid details pls enter prpr details' 
//     // errorMessage=ctx.session.errorMessage= 'invalid details pls enter prpr details' ;
//     // ctx.session.errorMessage = 'invalid details pls enter prpr details'
//     ctx.throw(400, 'not valid')

//     ctx.redirect('/register')
//   }
// })


router.post('/login', async (ctx) => {

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
//=======================
const mongo = require('../dal/index.js').db('CRED');

const ObjectId = require('mongodb').ObjectId;
const dtbs2 = require('../dal/prod')

router.post('/profile', async (ctx) => {
  console.log("2")
  const {email}=ctx.request.body;

  const getmaindata = await mongo.collection("user").findOne({
    email

  })
  ctx.body = {
    "message": "WELCOME TO YOUR PROFILE",
    "response": getmaindata}
  });
  
  //     r1.connect((err, db) =>{   //MongoClient
  //       console.log("3")
  //         if (err) throw err;
  //         console.log("4")
  //         var dbo = db.db("CRED");
  //         console.log("4")
  //         const getdatamain=await dbo.collection("user").findOne({

  //             email: ctx.body
  //         })

  // //         function(err, result) {
  // //             if (err) throw err;
  // //             ctx.body=result;
  // //             db.close();
  // //             console.log("5")
  //         // });
  //         // console.log("6")
  //     });
  // console.log("7")



//  const mainprodata=ctx.body;
//  const {first,last,email}=mainprodata;
// })
// =============================================================
// find
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://strongdemon:kdb65GK6zYJvRcg@strong.obgla.mongodb.net/myFirstDatabase?authSource=admin&replicaSet=atlas-lnv1hu-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true";

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("SOC_MANAGEMENT_SYTEM");

//     dbo.collection("TENANT").find({}, { myobj: { HOME_ID: '61decfc17dc3064496e212f9'} }).toArray((err, result)=> {
//       if (err) throw err;
//       console.log(result);
//       db.close();
//     });
//   });

//===========================================================================================================================================
//===========================================================================================================================================
//===========================================================================================================================================
//creating pages 
const data = [    //creating demo pages from serrver
  { "page_id": 1, "page_name": "a", "page_description": "demo page from server" },
  { "page_id": 2, "page_name": "b", "page_description": "demo page from server" },
  { "page_id": 3, "page_name": "c", "page_description": "demo page from server" }
]
const createpage = (ctx) => {
  const { page_id, page_name, page_description } = ctx.request.body
  data.push({ page_id, page_name, page_description })
  ctx.body = "page added into your account";
}


router.post('/createpage', createpage)

try {
  const user = CRED.create(sanitize({
    page_id, page_name, page_description
  }))
  ctx.session.user = {  //st
    page_id: user.page_id,
    page_name: user.page_name,
    page_description: user.page_description
  }
} catch (err) {

  err = "non valid";
}

//read page data
let readpage = (ctx) => {

  ctx.body = data
}
router.get('/readpage', readpage)
// ===============================================================

router.post('/readpage1', async (ctx) => {
  const {page_id,page_name,page_description}=ctx.request.body;

  const getmaindata = await mongo.collection("user").findOne({
    page_id

  })
  ctx.body = {
    "message": "WELCOME TO YOUR PAGE",
    "response": page_id,page_name,page_description,
    "msg":"you can CRUD on this page",
    "mesg":"you can CRUD post on this page"
  }
  });


// =================================================================
// user can add pages into it
const addpage = (ctx) => {
  const page = ctx.request.body;  //
  data.push(page)
  ctx.body = "page has been added";

}
router.post('/addpage', addpage)


const updatepage = (ctx) => {
  let {page_id,page_name,page_description} = ctx.request.body
  const index = data.findIndex((e => e.id === page_id.id)) //itrate
  
  // data.map(x=>x+1)
  let msg;
  if (index == -1) {
    data.push({page_id,page_name,page_description});
    msg = "your page has been added"

  }
  else {
    data[index] = {page_id,page_name,page_description};
    msg = "your page has been upgaraded"
  }
  ctx.body = msg;
}
router.put('/updatepage', updatepage)

// delete


const deletepage = (ctx) => {

  let {page_id,page_name,page_description} = ctx.request.body
  const indexpage = data.findIndex((e) => e.id === page_id.id)
  let msg;

  if (indexpage == -1) {
    delete data[indexpage];
    msg = "your page has been deleted"
  }
  ctx.body = msg
  ctx.throw(400,"not fond")

}
router.delete('/deletepage', deletepage)



// })
//===========================================================================================================================================
//===========================================================================================================================================
//===========================================================================================================================================
//creating posts
const createpost = (ctx) => {
  const { post_id, post_type, post_link } = ctx.request.body
  data.push({ post_id, post_type, post_link })
  ctx.body = "successfully post ";
}

const postdata = [    //creating demo pages from serrver
  { "post_id": 1, "post_type": "demo_post", "post_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPIcAn1WPzyTrEw864Gjm-8n092HFaYkCJHg&usqp=CAU" }

]
router.post('/createpost', createpost)

try {
  let user = CRED.create(sanitize({ //rmv illgl char from data 
    post_id, post_type, post_link
  }))
  ctx.session.user = {  //st
    post_id: user.post_id,
    post_type: user.post_type,
    post_link: user.post_link
  }
} catch (err) {
  err = "not valid please recreat the post ";
}

//read page data
let readpost = (ctx) => {

  ctx.body = postdata
}
router.get('/readpost', readpost)

// user can add pages into it
const addpost = (ctx) => {
  const post = ctx.request.body;  //
  postdata.push(post)
  ctx.body = "page has been added";

}
router.post('/addpost', addpost)


const updatepost = (ctx) => {
  let upost = ctx.request.body
  const index = postdata.findIndex((e => e.id === post_id.id))
  let msg;
  if (index == -1) {
    postdata.push(upost);
    msg = "your page has been added"

  }
  else {
    postdata[index] = upost;
    msg = "your page has been upgaraded"
  }
  ctx.body = msg;
}
router.post('/updatepost', updatepost)

// delete

const deletepost = (ctx) => {

  postdata = ctx.request.body
  const index = postdata.findIndex((e) => e.id === post_id.id)
  let msg;

  if (index == -1) {
    delete postdata[index];
    msg = "your page has been deleted"
  }
  ctx.body = msg

}
router.delete('/deletepost', deletepost)

// ==============================================================================================
const likepost = (ctx) => {
  const { post_id, like } = ctx.request.body
  const likeindex = postdata.findIndex((e) => e.id === post_id.id)
  if (post_id == -1) {
    msg = "there is no post on this index please choose other"
  }
  else {
    like[likeindex] = postdata
    ctx.body = "you have liked this post"
  }

}

router.post('/likepost', likepost)
// =====================================================================================
const comment = (ctx) => {

}
router.post('/comment', comment)
//======================================================================================================================================================
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
      if (!user) return ctx.status(400).ctx, body("Invalid link or expired")

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
// ==
//new register logic with successfully connection in to db
//register
const { createpro, getpro, getpros, uppro, delpro } = require('../api/pro_api');
// const { register } = require('validatorjs');

router.get('/getpros', async ctx => {
  ctx.body = await getpros();
})

router.post('/createpro', async ctx => {
  let pro = ctx.request.body;
  pro = await createpro(pro);

  ctx.response.status = 200;
  ctx.body = pro;

})

router.get("/:id", async ctx => {
  const id = ctx.params.id;
  ctx.body = await getpro(id);
})

router.delete('/:id', async ctx => {

  const id = ctx.params.id;
  await delpro(id);
})

router.put('/:id', async ctx => {

  const id = ctx.params.id;
  let pro = ctx.request.body;
  pro = await uppro(pro);
  ctx.response.status = 200;
  ctx.body = pro;
})

module.exports = router;








// bup
// register
// const {createpro,getpro,getpros,uppro,delpro}=require('../api/pro_api')

// router.get('/getpros',async ctx=>{
//   ctx.body=await getpros();
// })

// router.post('/createpro',async ctx=>{
//   let pro=ctx.request.body;
//   pro=await createpro(pro);

//   ctx.response.status=200;
//   ctx.body=pro;

// })

// router.get("/:id",async ctx=>{
//   const id= ctx.params.id;
//   ctx.body=await getpro(id);
// })

// router.delete('/:id',async ctx=>{

//   const id=ctx.params.id;
//   await delpro(id);
// })

// router.put('/:id',async ctx=>{

//   const id=ctx.params.id;
//   let pro=ctx.request.body;
//   pro=await uppro(pro);
//   ctx.response.status=200;
//   ctx.body=pro;
// })

