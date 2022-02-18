
const middleware_for_add_member = (ctx, next) => {


  const { admin, manager } = ctx.request.body



  if (admin && manager) {

    ctx.status = 401;
    ctx.body = "you can choose anyone role"
    return

  }

  if (!(admin || manager)) {
    ctx.status = 403;
    ctx.body = "please choose any one role"
  

    return
  }
  next();
  console.log("next")

}
module.exports = { middleware_for_add_member }





  // const {admin,manager}=ctx.request.body

  // const roles=1
  // switch (roles) {
  //     case 1:
  //         console.log("admin")
  //         break;
  //     case manager:
  //         console.log("manager");
  //         break;
  //     default:
  //         console.log("pls enter valid");
  //         break;
  // }


//   if (!(admin || manager)) {
//     const detas = { admin, manager }
//     const fKeys = Object.keys(detas)
//     const a = fKeys.map(key => !detas[key] ? key : 'THIS FIELD INSERTED PROPER')
//     ctx.status = 403;
//     ctx.body = {
//       msg: "true",
//       message: "Validation Failed. Please enter required fields",
//       fields: a
//     }
//     return
//   }

//   // else if (admin !== "true" || admin !== "false" || manager !== "true" || manager !== "false") {
//   //   ctx.throw('please enter in boolean', 403)
//   // }
//   next();
//   console.log("vldt")
//   return

// }