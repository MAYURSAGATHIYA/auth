const p1 = require('./index').db('CRED').collection('member_role');

const ObjectId = require('mongodb').ObjectId;

const koa = require('koa');

const saving_role_details = async ({ random_unique_id_for_invite_role, role ,owner_name}, ctx) => { // for knwowing who has invited
    // console.log("db1")
    // console.log(saving_role_details)
    const rslt = await p1.insertOne({ random_unique_id_for_invite_role, role,owner_name });
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




const removeByIdfunc = async id => {

    await p1.deleteOne({ _id: ObjectId(id) });
}



 const update_member_role_func_db = async (id,role,owner_name) => p1.updateOne({_id: ObjectId(id)},{$set:{role,owner_name}})
 

module.exports ={ saving_role_details, getAllfunc, getByIdfunc, update_member_role_func_db, removeByIdfunc}