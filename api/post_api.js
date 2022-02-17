const { ObjectId } = require('mongodb');
const query = require('../dal/query');
// const {first,last,email,password,confirmpassword}=require('../routes/regrt')
const post_db=require('../dal/post_db')
const createpost = async (ctx) => {


    const { post_id, post_type, post_link } = ctx.request.body;


    const userdata = { post_id, post_type, post_link }

    ctx.body = { msg: " SUCCESSFULLY post" }
    return await post_db.save(userdata);
    // console.log("syccessfukky registred")

}


const getposts = async (ctx) => {
    const j = await post_db.getAll();
    ctx.body = j
    return
}

const getpost = async (ctx) => {
    // console.log(ctx.params.id)
    const gok = await post_db.getById(ctx.params.id);
    ctx.body = gok
    return

}

const delpost = async (ctx) => {
    
    const scr = await post_db.removeById(ctx.params.id);
    ctx.body = scr
    ctx.status=200;
    ctx.body="successfully deleted"
   
    return
}

const updatepost =  (ctx) => {

   
    
    
    const { post_id, post_type, post_link}=ctx.request.body

    const storing={ post_id, post_type, post_link}
    
    const haw =  post_db.update(ctx.params.id, storing)
    ctx.status=200;
    ctx.body = "successfully updated"
    return
}

module.exports = {
    createpost,
    getposts,
    getpost,
    delpost,
    updatepost
}