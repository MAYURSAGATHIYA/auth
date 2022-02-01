// const validator = require('validatorjs');
// const validator=new Validator();
// const emailreg = RegExp(
//     /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
//   );

try{

}catch(err){
var validate;
const reg = (ctx) => {
    const validationRule = {
        "first": "required|email",
        "last": "required|string",
        "email": "required|string",
        "password": "required|string|min:6|confirmed",
        "confirmpassword": "password"
    }
    validate(ctx, validationRule, {}, (err, status) => {
        if (!status) {
            ctx.status(403)
                .send({
                    success: false,
                    message: 'Validation failed',
                    data: err
                });
        } else {
            next();
        }
    });
    let password = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    {
        module.exports = Validate.register('strict', value => password.test(value), 'not valid');
    }
    let email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    {

        module.exports = Validate.register('strict', value => email.test(value), 'not valid')
    }
} 



module.exports = reg
console.log(err)
}