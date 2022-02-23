const p1 = require('./dal/index').db('CRED').collection('userprodata');
const pro_api = require('./api/pro_api');

const emailcheck = async (ctx, next) => {

    const {
        email
    } = ctx.request.body
    const storeemail = {
        email
    }
    // console.log(storeemail, "this is storeemail")
    querydb = {
        email
    }
    const email_from_db = await p1.find(querydb).toArray();
    // console.log(email_from_db, "email from db");
    console.log(email_from_db, email_from_db.length)
    if (email_from_db.length === 0) {
        console.log("successfully registered")
        return next()
    }
    console.log("same user exist")
    ctx.status = 403;
    ctx.body = {msg:"this email is already taken"}

    return


    // email_from_db.length===0? ctx.body="valid":ctx.body="not valid"

    // ctx.status=200;

}
module.exports = {
    emailcheck
}