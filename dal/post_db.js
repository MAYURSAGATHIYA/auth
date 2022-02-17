// const context = require('koa/lib/context');

const products = require('./index').db('CRED').collection('postsdata');

const ObjectId = require('mongodb').ObjectId;

// ================================================================
const save = async ({ post_id, post_type, post_link },ctx) => {
    
    const result = await products.insertOne({ post_id, post_type, post_link });
    
    
    return result;//.ops[0];
    
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
const update = async (id, { post_id, post_type, post_link }) => {
    const result = await products.replaceOne({ _id: ObjectId(id) }, { post_id, post_type, post_link });
    
    return result

    
}
// ================================================================
const removeById = async id => {
    
    await products.deleteOne({ _id: ObjectId(id) });
}


module.exports = { getAll, getById, removeById, save, update };

