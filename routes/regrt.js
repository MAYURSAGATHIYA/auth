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

