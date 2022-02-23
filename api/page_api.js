const mongo = require('../dal/index.js').db('CRED');
const ObjectId = require('mongodb').ObjectId;
const dtbs2 = require('../dal/query')
const page_db = require('../dal/page_db')


//=============================== 
const createpage = async (ctx) => {


    const { page_id, page_name,email, page_description } = ctx.request.body;


    const pagedata = { page_id, page_name,email, page_description }

    ctx.body = {
        msg: "WELCOME TO PAGE",
        "response": pagedata
    }
    await page_db.saveforpage(pagedata);
    
    // console.log("syccessfukky registred")

}

const getpages = async (ctx) => {
    const j = await page_db.getAllpage();
    ctx.body = j
    return
}

const getpage = async (ctx) => {
    // console.log(ctx.params.id)
    const gok = await page_db.getByIdpage(ctx.params.id);
    ctx.body = gok
    return

}

const deletepage = async (ctx) => {

    const scr = await page_db.removeByIdpage(ctx.params.id);
    ctx.body = scr
    ctx.status = 200;
    ctx.body = "successfully deleted"

    return
}
const updatepage =  (ctx) => {
    const { page_id, page_name,email, page_description } = ctx.request.body
    const storing_in_var = { page_id, page_name,email, page_description }
    const haw =  page_db.updatepagedb(ctx.params.id, storing_in_var)
    ctx.status = 200;
    ctx.body = "page successfully updated "
    return

}

module.exports = {
    createpage,
    getpages,
    getpage,
    deletepage,
    updatepage
}
//   //working