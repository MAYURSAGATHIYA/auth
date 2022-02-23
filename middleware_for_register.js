
const middleware = (ctx, next) => {


    const { first, last, email, password, confirmpassword } = ctx.request.body
  
  
  
    if (!(first && last && email && password && confirmpassword)) {
  
  
      if (!(first && last && email && password && confirmpassword)) {
        const registration_details = { first, last, email, password, confirmpassword }
        const fieldKeys = Object.keys(registration_details)
        const a = fieldKeys.map(key => !registration_details[key] ? key : 'THIS FIELD INSERTED PROPER')
        ctx.status=403;
        ctx.body={
          msg: "true",
          message: "Validation Failed. Please enter required fields",
          fields: a
        }
      return
      }
    }
    else if (password !== confirmpassword) {
      ctx.throw('password is different please enter same password', 403)
    }
    next();
    console.log("vldt")
  
  }
  

  module.exports={middleware}



