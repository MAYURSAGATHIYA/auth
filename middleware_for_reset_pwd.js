const middleware_for_restpwd = (ctx, next) => {


    const {
        password,
        confirmpassword
    } = ctx.request.body

    if (password !== confirmpassword) {
        ctx.status = 403;
        ctx.body = {
            message: "password should be the same"
        }
        return
    }

    console.log("vldt")
    return next();
}


module.exports = {
    middleware_for_restpwd
}
