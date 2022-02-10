// const koaRouter = require('koa-router')
// const router = new koaRouter()
// // const router = require("../routes/regrt")
// // const mongo = require('../dal/index.js').db('CRED');
// // const ObjectId = require('mongodb').ObjectId;
// console.log("ok2")

// router.get('/hom', (ctx) => {
//     console.log("vdfvdbjdbvb")
//     ctx.body = "Welcome to my Koa.js Server"
// })

// //=======================
// const createpost = (ctx) => {
//     const { post_id, post_type, post_link } = ctx.request.body
//     data.push({ post_id, post_type, post_link })
//     ctx.body = "successfully post ";
// }
// var postdata = [    //creating demo pages from serrver
//     { "post_id": 1, "post_type": "demo_post", "post_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPIcAn1WPzyTrEw864Gjm-8n092HFaYkCJHg&usqp=CAU" }
// ]
// // router.post('/createpost', createpost)
// try {
//     let user = CRED.create(sanitize({ //rmv illgl char from data 
//         post_id, post_type, post_link
//     }))
//     ctx.session.user = {  //st
//         post_id: user.post_id,
//         post_type: user.post_type,
//         post_link: user.post_link
//     }
// } catch (err) {
//     err = "not valid please recreat the post ";
// }
// //read post data
// let readpost = (ctx) => {

//     ctx.body = postdata
// }
// // router.get('/readpost', readpost)
// // user can add pages into it
// const addpost = (ctx) => {
//     const post = ctx.request.body;  //
//     postdata.push(post)
//     ctx.body = "post has been added";
// }
// // router.post('/addpost', addpost)
// const updatepost = (ctx) => {
//     let { post_id, post_type, post_link } = ctx.request.body
//     const index = postdata.findIndex((e => e.id === post_id.id))
//     let msg;
//     if (index == -1) {
//         postdata.push({ post_id, post_type, post_link });
//         msg = "your page has been added"

//     }
//     else {
//         postdata[index] = { post_id, post_type, post_link };
//         msg = "your page has been upgaraded"
//     }
//     ctx.body = msg;
// }
// // router.put('/updatepost', updatepost)

// // delete

// const deletepost = (ctx) => {

//     let { post_id, post_type, post_link } = ctx.request.body
//     const index = postdata.findIndex((e) => e.id === post_id.id)
//     let msg;

//     if (index == -1) {
//         delete postdata[index];

//     }
//     msg = "your page has been deleted"
//     ctx.body = msg

// }
// // router.delete('/deletepost', deletepost)
// module.exports={
//     createpost,
//     readpost,
//     addpost,
//     updatepost,
//     deletepost,
//     router

// }

// // module.exports=router

//=======================================================
//=======================================================
//=======================================================
//=======================================================
//=======================================================


const  { getAll, getById, removeById, save, update } = require('../dal/post_db.js');

const createpost=async({ post_id, post_type, post_link })=>{


    const pro={ post_id, post_type, post_link }
    
    return await save(pro);
}

const getposts=async()=>{
    return await getAll();
}

const getpost=async id =>{
    return await getById(id);
}

const delpost=async id=>{
    return await removeById(id);
}
const updatepost=async (id,{ post_id, post_type, post_link })=>{
    return await update(id,{ post_id, post_type, post_link })
}

module.exports={
   createpost,
   getposts,
   getpost,
   delpost,
   updatepost
}