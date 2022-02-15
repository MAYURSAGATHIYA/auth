const { ObjectId } = require('mongodb');
const query = require('../dal/query');
// const {first,last,email,password,confirmpassword}=require('../routes/regrt')

const createpro = async (ctx) => {


    const { first, last, email, password, confirmpassword } = ctx.request.body;


    const userdata = { first, last, email, password, confirmpassword }

    ctx.body = { msg: "WELCOME TO OUR SITE YOU'VE REGISTERED SUCCESSFULLY" }
    return await query.save(userdata);
    // console.log("syccessfukky registred")

}


const getpros = async (ctx) => {
    const j = await query.getAll();
    ctx.body = j
    return
}

const getpro = async (ctx) => {
    // console.log(ctx.params.id)
    const gok = await query.getById(ctx.params.id);
    ctx.body = gok
    return

}

const delpro = async (ctx) => {
    
    const scr = await query.removeById(ctx.params.id);
    ctx.body = scr
    ctx.status=200;
    ctx.body="successfully deleted"
   
    return
}
const uppro = async (ctx) => {
    const {first, last, email, password, confirmpassword}=ctx.request.body
    const storing_in_var={first, last, email, password, confirmpassword}
    const haw = await query.update(ctx.params.id, storing_in_var)
    ctx.body = haw
    ctx.status=200;
    ctx.body="successfully updated "
    return

}
module.exports = {
    createpro,
    getpros,
    getpro,
    delpro,
    uppro
}