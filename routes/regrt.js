const verifyToken = require('../mdl_for_token.js')
const koaRouter = require('koa-router')
const router = new koaRouter()
const pro_api = require('../api/pro_api');
const { profile } = require('../api/profile_api')
const login_api = require('../api/login_api')
const query = require('../dal/query')
const koa = require('koa')
const srvr = require('../server')
const middleware_for_register = require('../middleware_for_register')


//reg import
const routelogic=require('./routelogic')

//post import
const { createpost,
  getposts,
  getpost,
  delpost,
  updatepost
} = require('../api/post_api')
const { createpage,
  getpages,
  getpage,
  delpage,
  updatepage
} = require('../api/page_api');



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




//==========================================================

router.post('/registration', middleware_for_register.middleware, pro_api.createpro)
//============================================
router.post('/getallusers', pro_api.getpros)


router.get('/getpro/:id', pro_api.getpro)
router.delete('/delpro/:id', pro_api.delpro)
router.put('/updateuser/:id', middleware_for_register.middleware,pro_api.uppro)
// login
router.post('/login', verifyToken, login_api.login)
//profile
router.post('/profile', verifyToken, profile);
//pagreroutes
router.post('/createpage', verifyToken, createpage)
router.get('/getpagespage', verifyToken, getpages)
router.post('getpage/:id', verifyToken, getpage)
router.put('/updatepage/:id', verifyToken, updatepage)
router.delete('/deletepage/:id', verifyToken, delpage)
// POST ROUTES
router.post('/createpost', verifyToken, createpost)
router.get('/readposts', verifyToken, getposts)
router.get('/readpost/:id', verifyToken, getpost)
router.put('/updatepost/:id', verifyToken, updatepost)
router.delete('/deletepost/:id', verifyToken, delpost)

//like 
const { likepost } = require('../api/like_api')
router.post('/likepost', likepost)
//comment


router.get('/home', (context) => {
  context.body = "Welcome to my Koa.js Server"
})