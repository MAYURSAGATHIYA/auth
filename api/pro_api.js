const  queries = require('../dal/query');
// const {first,last,email,password,confirmpassword}=require('../routes/regrt')

const createpro=async(ctx)=>{


  const {first,last,email,password,confirmpassword} = ctx.request.body; 

   const userdata ={first,last,email,password,confirmpassword} 

    queries.save(userdata);
}

const getpros=async()=>{
    return await queries.getAll();
}

const getpro=async id =>{
    return await queries.getById(id);
}

const delpro=async id=>{
    return await queries.removeById(id);
}
const uppro=async (id,{first,last,email,password,confirmpassword})=>{
    return await update(id,{first,last,email,password,confirmpassword})
}

module.exports={
    createpro,
    getpros,
    getpro,
    delpro,
    uppro
}