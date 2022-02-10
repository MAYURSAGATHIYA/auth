const koa = require('koa')
const srvr = require('../server')
const koaRouter = require('koa-router')
const router = new koaRouter()

// const {createpage,readpage,readpage1,addpage,updatepage,deletepage}=require('../api/page_api')
// const{createpost, readpost,addpost,updatepost,deletepost}=require('../api/post_api')
const {profile}=require('../api/profile_api')
const {login}=require('../api/login_api')
const { createpro, getpro, getpros, uppro, delpro } = require('../api/pro_api');
const {  createpage,getpages,getpage,delpage,updatepage} = require('../api/page_api');



router.get('/home', (context) => {
  context.body = "Welcome to my Koa.js Server"
})
//register

router.get('/getpros', async ctx => {
  ctx.body = await getpros();
})
//=========================
// const middleware=(ctx,next)=>{

//     const validationRule = {
//         "first": "required|string",
//         "last": "required|string",
//         "email": "required|string",
//         "password": "required|string|min:6|confirmed",
//         "confirmpassword": "password"
//     }
//     const validate=(ctx, validationRule, (err, status) => {

//       let password = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
//       {
//           module.exports = validate('strict', value => password.test(value), 'not valid');
//       }
//       let email = /^[\w\.]+@([\w]+\.)+[\w]{2,4}$/g
//       {
  
//           module.exports = validate('strict', value => email.test(value), 'not valid')
//       }

//         if (!status) {
//             ctx.status(403)
//                 .send({
//                     success: false,
//                     message: 'Validation failed',
//                     data: err
//                 });
//         } else {
//             ctx.body="you've entered correct validations"
//         }
//     });
   
//   console.log("middwllwed")
//   next();
//   console.log("demo")
//   }

const middleware=require('../middleware.js')

router.post('/createpro',middleware, async ctx => {
  console.log("mdlwr")
  let pro = ctx.request.body;
  pro = await createpro(pro);

  ctx.response.status = 200;
  ctx.body = pro;

})
//========================
// const middleware=(ctx,next)=>{
//   console.log("middwllwed")
//   next()
//   }
  
// router.post('/createpro', middleware, async(ctx)=>{

//   let pro = ctx.request.body;
//   pro = await createpro(pro);

//   ctx.response.status = 200;
//   ctx.body = pro;


// })
//======================================






//
// router.post('/createpro', middleware,async(ctx)=>{

//   let pro = ctx.request.body;
//   pro = await createpro(pro);

//   ctx.response.status = 200;
//   ctx.body = pro;
// let validate;
// const {vali} = (ctx) => {
//     const validationRule = {
//         "first": "required|string",
//         "last": "required|string",
//         "email": "required|string",
//         "password": "required|string|min:6|confirmed",
//         "confirmpassword": "password"
//     }
//     validate(ctx, validationRule, {}, (err, status) => {
//         if (!status) {
//             ctx.status(403)
//                 .send({
//                     success: false,
//                     message: 'Validation failed',
//                     data: err
//                 });
//         } else {
//             ctx.body="invalid"
//         }
//     });
//     let password = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
//     {
//         module.exports = register('strict', value => password.test(value), 'not valid');
//     }
//     let email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
//     {

//         module.exports = register('strict', value => email.test(value), 'not valid')
//     }
// } 
// next();

//======================================


//================
// router.post('/createpro', async ctx => {
//   let pro = ctx.request.body;
//   pro = await createpro(pro);

//   ctx.response.status = 200;
//   ctx.body = pro;

// })

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
router.post('/login',login)
router.post('/profile',profile);
//PAGE ROUTES

//==========================================================

//new routes for api
//routes for pages

router.get('/getpages', async ctx => {
  ctx.body = await getpages();
})

router.post('/createpage', async ctx => {
  let pro = ctx.request.body;
  pro = await createpage(pro);

  ctx.response.status = 200;
  ctx.body = pro;

})

router.get("/:id", async ctx => {
  const id = ctx.params.id;
  ctx.body = await getpage(id);
})

router.delete('/:id', async ctx => {

  const id = ctx.params.id;
  await delpage(id);
})

router.put('/:id', async ctx => {

  const id = ctx.params.id;
  let pro = ctx.request.body;
  pro = await updatepage(pro);
  ctx.response.status = 200;
  ctx.body = pro;
  
})

module.exports=router;


//=========================

