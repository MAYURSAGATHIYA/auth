const p1 = require('./index').db('CRED').collection('member_role');

const ObjectId = require('mongodb').ObjectId;



const saving_role_details = async ({ random_unique_id_for_invite_role, admin, manager},ctx) => { // for knwowing who has invited
    // console.log("db1")
    // console.log(saving_role_details)
    const rslt = await p1.insertOne({ random_unique_id_for_invite_role, admin, manager });
    // console.log("2")
    // console.log(rslt,"rslt ")
    
    return rslt;    
}
const getAllfunc = async () => {

    const cursor = await p1.find();

    return cursor.toArray();
}

const getByIdfunc =  (id) => {
      return p1.findOne({ _id: ObjectId(id) });
}


const update_member_role_func_db =  (id, { random_unique_id_for_invite_role, admin, manager }) => {
    const result =  p1.replaceOne({ _id: ObjectId(id) }, { random_unique_id_for_invite_role, admin, manager });
    return result //.ops[0];
}

const removeByIdfunc = async id => {
    
    await p1.deleteOne({ _id: ObjectId(id) });
}

module.exports={saving_role_details,getAllfunc,getByIdfunc,update_member_role_func_db,removeByIdfunc}
