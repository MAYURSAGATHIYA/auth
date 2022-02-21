

const middleware_for_add_member = (ctx, next) => {


  const {
      role
  } = ctx.request.body
  if (!(role === 'admin' ||  role === 'manager')) {
      ctx.status = 401;
      ctx.body = "you can choose only admin or manager"
      return

  }

next();
}

module.exports = { middleware_for_add_member }














//===========================================================
// const middleware_for_add_member = (ctx, next) => {


//   const { admin, manager } = ctx.request.body



//   if (admin && manager) {

//     ctx.status = 401;
//     ctx.body = "you can choose anyone role"
//     return

//   }

//   if (!(admin || manager)) {
//     ctx.status = 403;
//     ctx.body = "please choose any one role"
  

//     return
//   }
//   next();
//   console.log("next")

// }
// module.exports = { middleware_for_add_member }
//===========================================================


