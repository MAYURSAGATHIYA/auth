
const middleware_for__func_page= (ctx, next) => {


    const { page_id, page_name, page_description } = ctx.request.body
  
  
  
    if (!(page_id&& page_name&& page_description)) {
  
  
      if (!(page_id&& page_name&& page_description)) {
        const details = { page_id, page_name, page_description }
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
  
  module.exports={middleware_for__func_page}