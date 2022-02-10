

const  {save,getAll,getById,update,removeById } = require('../dal/page_db.js');

const createpage=async({ page_id, page_name, page_description })=>{


    const pro={ 
        page_id,
         page_name, 
         page_description }
    
    return await save(pro);
}

const getpages=async()=>{
    return await getAll();
}

const getpage=async id =>{
    return await getById(id);
}

const delpage=async id=>{
    return await removeById(id);
}
const updatepage=async (id,{ page_id, page_name, page_description })=>{
    return await update(id,{ page_id, page_name, page_description })
}

module.exports={
   createpage,
   getpages,
   getpage,
   delpage,
   updatepage
}