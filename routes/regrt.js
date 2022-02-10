const koa = require('koa')
const srvr = require('../server')
const koaRouter = require('koa-router')
const router = new koaRouter()

const {createpage,readpage,readpage1,addpage,updatepage,deletepage}=require('../api/page_api')
const{createpost, readpost,addpost,updatepost,deletepost}=require('../api/post_api')
const {profile}=require('../api/profile_api')
const {login}=require('../api/login_api')


router.get('/home', (context) => {
  context.body = "Welcome to my Koa.js Server"
})
//register
const { createpro, getpro, getpros, uppro, delpro } = require('../api/pro_api');

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
const Router = require('koa-router')
router.post('/createpage', createpage)
router.get('/readpage', readpage)
router.post('readpage1',readpage1)
router.post('/addpage', addpage)
router.put('/updatepage', updatepage)
router.delete('/deletepage', deletepage)
// POST ROUTES
router.post('/createpost', createpost)
router.get('/readpost', readpost)
router.post('/addpost', addpost)
router.put('/updatepost', updatepost)
router.delete('/deletepost', deletepost)
//like 
const {likepost}=require('../api/like_api')
router.post('/likepost',likepost)
//comment

//rstpwd
const {rstpwd}=require('../api/resetpwd_api')
router.post('/rstpwd',rstpwd)

module.exports = router;