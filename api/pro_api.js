const  { getAll, getById, removeById, save, update } = require('../dal/prod');

const createpro=async({first,last,email,password,confirmpassword})=>{


    const pro={
        first,
        last,
        email,
        password,
        confirmpassword
    }
    return await save(pro);
}

const getpros=async()=>{
    return await getAll();
}

const getpro=async id =>{
    return await getById(id);
}

const delpro=async id=>{
    return await removeById(id);
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