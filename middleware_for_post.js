
const middleware_for_func_post= (ctx, next) => {


    const { post_id, post_type, post_link } = ctx.request.body
  
  
  
    if (!(post_id&& post_type&& post_link)) {
  
  
      if (!(post_id&& post_type&& post_link)) {
        const details = { post_id, post_type, post_link }
        const fieldKeys = Object.keys(details)
        const q = fieldKeys.map(key => !details[key] ? key : 'THIS FIELD INSERTED PROPER')
        console.log(q)
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
  return
  }
  
  
  module.exports={middleware_for_func_post}