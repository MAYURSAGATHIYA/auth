const products = require('./index').db('CRED').collection('userpagedata');

const ObjectId = require('mongodb').ObjectId;

const page_api = require('../api/page_api')
const saveforpage = async ( { page_id, page_name,email, page_description } , ctx) => {

    const result = await products.insertOne({ page_id, page_name,email, page_description });
    // if(!{first,last,email,password,confirmpassword})
    //   {
    //       ctx.body='please fill all fields'
    //     }

    return result;//.ops[0];

}
const getAllpage = async () => {

    const cursor = await products.find();

    return cursor.toArray();
}
// console.log("jhv")
// ================================================================
const getByIdpage = async (id) => {
    return await products.findOne({ _id: ObjectId(id) });
}
// ================================================================
// const updatepagedb = async (id, { page_id, page_name, page_description }) => {
//     const result = await products.replaceOne({ _id: ObjectId(id) }, { page_id, page_name, page_description });
//     return result //.ops[0];
// }

const updatepagedb = async (id, { page_id, page_name,email, page_description }) => products.updateOne({_id: ObjectId(id)},{$set: { page_id, page_name,email, page_description }})
 
// ================================================================
const removeByIdpage = async id => {

    await products.deleteOne({ _id: ObjectId(id) });
}








module.exports = {
    saveforpage,
    getAllpage,
    getByIdpage,
    updatepagedb,
    removeByIdpage
}