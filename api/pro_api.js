const  query = require('../dal/query');
// const {first,last,email,password,confirmpassword}=require('../routes/regrt')

const createpro=async(ctx)=>{


  const {first,last,email,password,confirmpassword} = ctx.request.body; 

 
   const userdata ={first,last,email,password,confirmpassword} 
   
   ctx.body={msg:"WELCOME TO OUR SITE YOU'VE REGISTERED SUCCESSFULLY"}
    return await query.save(userdata);
    // console.log("syccessfukky registred")
   
}


const getpros=async()=>{
    return await query.getAll();
}

const getpro=async id =>{
    return await query.getById(id);
}

const delpro=async id=>{
    return await query.removeById(id);
}
const uppro=async (id,{first,last,email,password,confirmpassword})=>{
    return await query.update(id,{first,last,email,password,confirmpassword})
}

module.exports={
    createpro,
    getpros,
    getpro,
    delpro,
    uppro
}