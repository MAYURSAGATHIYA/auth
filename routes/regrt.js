const koa = require('koa')
const srvr = require('../server')
const koaRouter = require('koa-router')
const router = new koaRouter()

// const {createpage,readpage,readpage1,addpage,updatepage,deletepage}=require('../api/page_api')
// const{createpost, readpost,addpost,updatepost,deletepost}=require('../api/post_api')
const { profile } = require('../api/profile_api')
const { login } = require('../api/login_api')
const pro_api = require('../api/pro_api');
const { createpage, getpages, getpage, delpage, updatepage } = require('../api/page_api');
const query = require('../dal/query')
// const validate=require('../middleware.js')


router.get('/home', (context) => {
  context.body = "Welcome to my Koa.js Server"
})
//register

router.get('/getpros', async ctx => {
  ctx.body = await getpros();
})
const middleware = (ctx, next) => {


  const { first, last, email, password, confirmpassword } = ctx.request.body



  if (!(first && last && email && password && confirmpassword)) {


    if (!(first && last && email && password && confirmpassword)) {
      const registration_details = { first, last, email, password, confirmpassword }
      const fieldKeys = Object.keys(registration_details)
      const a = fieldKeys.map(key => !registration_details[key] ? key : 'THIS FIELD INSERTED PROPER')
      ctx.status=403;
      ctx.body={
        msg: "true",
        message: "Validation Failed. Please enter required fields",
        fields: a
      }
    return
    }
    // ctx.throw('validation error', 403)
  }
  else if (password !== confirmpassword) {
    ctx.throw('password is different please enter same password', 403)
  }
  next();
  console.log("vldt")

}

router.post('/createpro', middleware, pro_api.createpro)





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



router.get("/:id", async ctx => {
  const id = ctx.params.id;
  ctx.body = await pro_api.getpro(id);
})

router.delete('/:id', async ctx => {

  const id = ctx.params.id;
  await pro_api.delpro(id);
})

router.put('/:id', async ctx => {

  const id = ctx.params.id;
  let pro = ctx.request.body;
  pro = await pro_api.uppro(pro);
  ctx.response.status = 200;
  ctx.body = pro;

})
router.post('/login', login)
router.post('/profile', profile);
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

module.exports = router;


//=========================

