const p1 = require('./index').db('CRED').collection('member_role');

const ObjectId = require('mongodb').ObjectId;

const koa = require('koa');

const saving_role_details = async ({ random_unique_id_for_invite_role, role }, ctx) => { // for knwowing who has invited
    // console.log("db1")
    // console.log(saving_role_details)
    const rslt = await p1.insertOne({ random_unique_id_for_invite_role, role });
    // console.log("2")
    // console.log(rslt,"rslt ")

    return rslt;
}
const getAllfunc = async () => {

    const cursor = await p1.find();

    return cursor.toArray();
}

const getByIdfunc = (id) => {
    return p1.findOne({ _id: ObjectId(id) });
}


// const update_member_role_func_db =  (id, { random_unique_id_for_invite_role,role }) => {
//     const result =  p1.replaceOne({ _id: ObjectId(id) }, { random_unique_id_for_invite_role,role });
//     return result //.ops[0];
// }

const removeByIdfunc = async id => {

    await p1.deleteOne({ _id: ObjectId(id) });
}




const update_member_role_func_db = async (ctx,id,role) => {


    console.log("dell8")

    const a1= {_id: ObjectId(id)}
    console.log("dell9")

    const a2= {$set:{role}}  
    console.log("dell10")
 
    const result = await p1.updateOne(a1,a2)
    console.log("dell11")

module.exports={expovars:result}

      return
   
}   

module.exports = { saving_role_details, getAllfunc, getByIdfunc, update_member_role_func_db, removeByIdfunc}

