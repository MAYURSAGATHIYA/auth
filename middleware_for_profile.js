
const middleware_for__func_profile= (ctx, next) => {


    const {  profile_id,email,bio,hobbies } = ctx.request.body
  
  
  
    if (!( profile_id&&email&&bio&&hobbies)) {
  
  
      if (!( profile_id&&email&&bio&&hobbies)) {
        const details = {  profile_id,email,bio,hobbies }
        const fieldKeys = Object.keys(details)
        const q = fieldKeys.map(key => !details[key] ? key : '')
        ctx.status=403;
        ctx.body={
          msg: "true",
          message: "Validation Failed. Please enter required fields",
          fields: q
        }
      return
      }
    }
   
    next();
    console.log("vldt")
  
  }
  
  module.exports={middleware_for__func_profile}