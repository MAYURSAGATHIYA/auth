// const context = require('koa/lib/context');

const products = require('./index').db('CRED').collection('user');

const ObjectId = require('mongodb').ObjectId;

// ================================================================
const save = async ({ first, last, email, password, confirmpassword }) => {
    
    const result = await products.insertOne({ first, last, email, password, confirmpassword });
   
    // console.log(result,"result")
    
    return result;
    
}
// ================================================================
const getAll = async () => {

    const cursor = await products.find();

    return cursor.toArray();
}
// console.log("jhv")
// ================================================================
const getById = async (id) => {
    return await products.findOne({ _id: ObjectId(id) });
}
// ================================================================
// const update = async (id, { first, last, email, password, confirmpassword }) => {
//     const result = await products.replaceOne({ _id: ObjectId(id) }, { first, last, email, password, confirmpassword });
//     return result //.ops[0];
// }
const update = async (id,{ first, last, email, password, confirmpassword }) => products.updateOne({_id: ObjectId(id)},{$set:{ first, last, email, password, confirmpassword }})
 

// ================================================================
const removeById = async id => {
    
    await products.deleteOne({ _id: ObjectId(id) });
}


module.exports = { getAll, getById, removeById, save, update };

