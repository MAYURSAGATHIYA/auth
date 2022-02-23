const middleware_for__team_reg = (ctx, next) => {
console.log("mdltest")

    const {
        username,
        password,
        confirmpassword,
        random_unique_id_for_invite_role
    } = ctx.request.body

 



    if (!(username && password && confirmpassword && random_unique_id_for_invite_role)) {
        const details = {
            username,
            password,
            confirmpassword,
            random_unique_id_for_invite_role
        }
        const fieldKeys = Object.keys(details)
        const q = fieldKeys.map(key => !details[key] ? key : 'THIS FIELD INSERTED PROPER')
        ctx.status = 403;
        ctx.body = {
            msg: "true",
            message: "Validation Failed. Please enter required fields",
            fields: q
        }
        return
    } else if (password !== confirmpassword) {
        ctx.throw('password is different please enter same password', 403)
    }
    const dem1={ username,
        password,
        confirmpassword,
        random_unique_id_for_invite_role}

    ctx.status=200;
    ctx.body=dem1
    // next();
    // console.log("vldt")

}

module.exports = {
    middleware_for__team_reg
}