const koaRouter = require('koa-router')
const router = new koaRouter()
// const router = require("../routes/regrt")
const mongo = require('../dal/index.js').db('CRED');
const ObjectId = require('mongodb').ObjectId;
console.log("ok2")

router.get('/home', (context) => {
    context.body = "Welcome to my Koa.js Server"
})
//creating pages 

const data = [    //creating demo pages from serrver
    { "page_id": 1, "page_name": "a", "page_description": "demo page from server" },
    { "page_id": 2, "page_name": "b", "page_description": "demo page from server" },
    { "page_id": 3, "page_name": "c", "page_description": "demo page from server" }
]
console.log("ok2")
const createpage = (ctx) => {
    const { page_id, page_name, page_description } = ctx.request.body
    data.push({ page_id, page_name, page_description })
    console.log("ok5")

    // try {
    //   const user = CRED.create(sanitize({
    //     page_id, page_name, page_description
    //   }))
    //   ctx.session.user = {  //st
    //     page_id: user.page_id,
    //     page_name: user.page_name,
    //     page_description: user.page_description
    //   }
    // } catch (err) {

    //   err = "non valid";
    // }

    ctx.body = "page added into your account";
}
// router.post('/createpage', createpage)
// router.route("/createpage").post(createpage)  
//==============================================================
const readpage = (ctx) => {

    // msg="skn"
    // ctx.body=msg
    ctx.body = data
}
// router.get('/readpage', readpage)
// ===============================================================
// router.post('/readpage1', async (ctx) => {

    const readpage1= async (ctx)=>{
    const { page_id, page_name, page_description } = ctx.request.body;

    const getmaindata = await mongo.collection("user").findOne({
        page_id

    })
    ctx.body = {
        "message": "WELCOME TO YOUR PAGE",
        "response": page_id, page_name, page_description,
        "msg": "you can CRUD on this page",
        "mesg": "you can CRUD post on this page"
    }
// });
}
// router.post('readpage1',readpage1)


// =================================================================
// user can add pages into it
const addpage = (ctx) => {
    const page = ctx.request.body;  
    data.push(page)
    ctx.body = "page has been added";

}
// router.post('/addpage', addpage)

//=======================================
const updatepage = (ctx) => {
    let { page_id, page_name, page_description } = ctx.request.body
    const index = data.findIndex((e => e.id === page_id.id)) //itrate

    // data.map(x=>x+1)
    let msg;
    if (index == -1) {
        data.push({ page_id, page_name, page_description });
        msg = "your page has been added"

    }
    else {
        data[index] = { page_id, page_name, page_description };
        msg = "your page has been upgaraded"
    }
    ctx.body = msg;
}
// router.put('/updatepage', updatepage)
//=======================================
// delete

const deletepage = (ctx) => {

    
    let { page_id, page_name, page_description } = ctx.request.body
    const indexpage = data.findIndex((e) => e.id === page_id.id)
    let msg;

    if (indexpage == -1) {
        delete data[indexpage];
        // msg = "your page has been deleted"
    }
    msg = "your page has been deleted"
    ctx.body = msg
    //ctx.throw(200,"page deleted successfully")

}

// router.delete('/deletepage', deletepage)

//=======================================

module.exports = {
    createpage,readpage,readpage1,addpage,updatepage,deletepage
}