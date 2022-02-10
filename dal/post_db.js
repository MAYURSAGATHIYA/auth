const posts = require('./index').db('CRED').collection('user');

const ObjectId = require('mongodb').ObjectId;

const save = async ( { post_id, post_type, post_link } ) => {
    const result = await posts.insertOne( { post_id, post_type, post_link } );

    return result;//.ops[0];
}
const getAll = async () => {

    const cursor = await posts.find();

    return cursor.toArray();
}
const getById = async (id) => {
    return await posts.findOne({ _id: ObjectId });
}
const update = async (id, { post_id, post_type, post_link } ) => {
    const result = await posts.replaceOne({ _id: ObjectId(id) },  { post_id, post_type, post_link });
    return result.ops[0];
}
const removeById = async id => {
    await posts.deleteOne({ _id: ObjectId(id) });
}

module.exports = { getAll, getById, removeById, save, update };

