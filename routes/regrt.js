
const middleware_for_same_user=require('../middleware_for_reg_same')
const verifyToken = require('../mdl_for_token.js')
const koaRouter = require('koa-router')
const router = new koaRouter()
const pro_api = require('../api/pro_api');
const login_api = require('../api/login_api')
const query = require('../dal/query')
const koa = require('koa')
const srvr = require('../server')
const like_api=require('../api/like_api')

const middleware_for_register = require('../middleware_for_register')
const middleware_for_page=require('../middleware_for_page')
const middleware_for_post=require('../middleware_for_post');
const midddleware_for_profile=require('../middleware_for_profile')
//post import
const post_api= require('../api/post_api')
const page_api= require('../api/page_api');
const middleware_for_like=require('../midddleware_for_like.js')

//member import
const member_api=require('../member/member_api')
const middleware_for_add_member=require('../middleware_for_add_member')

const midddleware_for_team_api=require('../middleware_for_team_api')
const resetpwd_middleware=require('../middleware_for_reset_pwd')



//=========================

//==========================================================
router.post('/registration', middleware_for_register.middleware,middleware_for_same_user.emailcheck ,pro_api.createpro)
router.get('/getallusers',pro_api.getpros)
router.get('/getpro/:id', pro_api.getpro)
router.delete('/delpro/:id', pro_api.delpro)
router.put('/updateuser/:id', middleware_for_register.middleware,middleware_for_same_user.emailcheck,pro_api.uppro)

//==========================================================
// login
router.post('/login',  login_api.login)
//profile
const profile_api=require('../api/profile_api')
router.post('/createprofile', verifyToken,midddleware_for_profile.middleware_for__func_profile,profile_api.createprofile);
router.get('/getprofiles', verifyToken,profile_api.getprofiles);
router.get('/profile/:id', verifyToken,profile_api.getprofile);
router.delete('/deleteprofile/:id', verifyToken,profile_api.deleteprofile);
router.put('/updateprofile/:id', verifyToken,midddleware_for_profile.middleware_for__func_profile,profile_api.updateprofile);

//===========================================
//pageroutes
router.post('/createpagegoku', verifyToken, middleware_for_page.middleware_for__func_page,page_api.createpage)
router.get('/getpagespage', verifyToken, page_api.getpages)
router.get('/getpage/:id', verifyToken, page_api.getpage)
router.put('/updatepage/:id', verifyToken, middleware_for_page.middleware_for__func_page, page_api.updatepage)
router.delete('/deletepage/:id', verifyToken, page_api.deletepage)
//===========================================
// POST ROUTES
router.post('/abea173781b2c3f6a850258d6dc1bf5ab5d4711b', verifyToken, middleware_for_post.middleware_for_func_post,post_api.createpost)
router.get('/readposts', verifyToken, post_api.getposts)
router.get('/readpost/:id', verifyToken, post_api.getpost)
router.put('/updatepost/:id', verifyToken,middleware_for_post.middleware_for_func_post, post_api.updatepost)
router.delete('/deletepost/:id', verifyToken, post_api.delpost)

//like 

router.post('/likepost', middleware_for_like.demon,like_api.likepost)
//====================================
router.post('/adding_member_role',verifyToken,middleware_for_add_member.middleware_for_add_member,member_api.create_role)
router.get('/display_all_member',verifyToken,member_api.display_all_members)
router.get('/display_specific_member_detail/:id',verifyToken,member_api.specific_member)
router.put('/update_user_role/:id',verifyToken,middleware_for_add_member.middleware_for_add_member,member_api.update_member_role)
router.delete('/delete_member/:id',verifyToken,member_api.delete_member)
//====================================
//
// tm register api
const rst_api=require('../api/resetpwd_api')
router.post('/tm_regiter',verifyToken,midddleware_for_team_api.middleware_for__team_reg)

//===================================
router.get('/home', (context) => {
  context.body = "Welcome to my Koa.js Server"
})

router.post('/rpwd/:id',resetpwd_middleware.middleware_for_restpwd,rst_api.rstpwd)
module.exports = router;