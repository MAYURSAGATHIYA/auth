const verifyToken = require('../mdl_for_token.js')
const koaRouter = require('koa-router')
const router = new koaRouter()
const pro_api = require('../api/pro_api');
// const { profile } = require('../api/profile_api')
const login_api = require('../api/login_api')
const query = require('../dal/query')
const koa = require('koa')
const srvr = require('../server')
const middleware_for_register = require('../middleware_for_register')
const { likepost } = require('../api/like_api')

//reg import
const routelogic=require('./routelogic')

//post import
const { createpost,
  getposts,
  getpost,
  delpost,
  updatepost
} = require('../api/post_api')
const page_api= require('../api/page_api');






//=========================

//==========================================================
router.post('/registration', middleware_for_register.middleware, pro_api.createpro)
router.get('/getallusers',pro_api.getpros)
router.get('/getpro/:id', pro_api.getpro)
router.delete('/delpro/:id', pro_api.delpro)
router.put('/updateuser/:id', middleware_for_register.middleware,pro_api.uppro)
//==========================================================
// login
router.post('/login', verifyToken, login_api.login)
//profile
const profile_api=require('../api/profile_api')
router.post('/profile', verifyToken,profile_api.createprofile);
router.post('/getprofiles', verifyToken,profile_api.getprofiles);
router.get('/profile', verifyToken,profile_api.getprofile);
router.delete('/deleteprofile', verifyToken,profile_api.deleteprofile);
router.put('/updateprofile', verifyToken,profile_api.updateprofile);



//===========================================
//pageroutes
router.post('/createpagegoku', verifyToken, page_api.createpage)
router.get('/getpagespage', verifyToken, page_api.getpages)
router.post('getpage/:id', verifyToken, page_api.getpage)
router.put('/updatepage/:id', verifyToken, page_api.updatepage)
router.delete('/deletepage/:id', verifyToken, page_api.deletepage)
//===========================================
// POST ROUTES
router.post('/createpost', verifyToken, createpost)
router.get('/readposts', verifyToken, getposts)
router.get('/readpost/:id', verifyToken, getpost)
router.put('/updatepost/:id', verifyToken, updatepost)
router.delete('/deletepost/:id', verifyToken, delpost)

//like 

router.post('/likepost', likepost)
//comment


router.get('/home', (context) => {
  context.body = "Welcome to my Koa.js Server"
})
module.exports = router;