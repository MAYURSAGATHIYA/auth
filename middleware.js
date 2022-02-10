
const {login}=require('./api/login_api')

const middleware=(ctx,next)=>{

    const validationRule = {
        "first": "required|string",
        "last": "required|string",
        "email": "required|string",
        "password": "required|string|min:6|confirmed",
        "confirmpassword": "password"
    }
    const validate=(ctx, validationRule, (err, status) => {

     
      
        if (!status) {
            ctx.status(403)
                .send({
                    success: false,
                    message: 'Validation failed',
                    data: err
                });
        } else {
            ctx.body="you've entered correct validations"
        }
        
    });
    let password = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      {
          module.exports = validate('strict', value => password.test(value), 'not valid');
      }
      let email = /^[\w\.]+@([\w]+\.)+[\w]{2,4}$/g
      {
  
          module.exports = validate('strict', value => email.test(value), 'not valid')
      }
  console.log("middwllwed")
  next();
  console.log("demo")
  }
module.exports=middleware