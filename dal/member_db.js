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




const update_member_role_func_db = async (role,ctx,id) => {

    // const {role}=ctx.request.body
    const a1= {_id: ObjectId(id)}
    const a2= {$set:{role}}

    const result = await p1.updateOne(a1,a2)
    const result2 = await p1.findOne(a1).toArray()
    console.log(result,"update query")
    console.log(result2,"update2 query")

    ctx.status=200;
    ctx.body = "successfully updated"   
    return result
    

}


module.exports = { saving_role_details, getAllfunc, getByIdfunc, update_member_role_func_db, removeByIdfunc }


// const update_member_role_func_db = async (_id,ctx) => {

//     const{role}=ctx.request.body

//     const result = await p1.updateOne({ _id }, {
//         $set: {
            
//         }
//     })
//     console.log(result,"update query")
//     ctx.status=200;
//     ctx.body = "successfully updated"   
//     return result
    

// }