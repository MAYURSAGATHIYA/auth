
const middleware_for__func_profile= (ctx, next) => {


    const {  profile_id,username,bio,hobbies } = ctx.request.body
  
  
  
    if (!( profile_id&&username&&bio&&hobbies)) {
  
  
      if (!( profile_id&&username&&bio&&hobbies)) {
        const details = {  profile_id,username,bio,hobbies }
        const fieldKeys = Object.keys(details)
        const q = fieldKeys.map(key => !details[key] ? key : 'THIS FIELD INSERTED PROPER')
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