const pages = require('./index').db('CRED').collection('user');

const ObjectId = require('mongodb').ObjectId;

const save = async ({ page_id, page_name, page_description }) => {
    const result = await pages.insertOne({ page_id, page_name, page_description });

    return result;//.ops[0];
}
const getAll = async () => {

    const cursor = await pages.find();

    return cursor.toArray();
}
const getById = async (id) => {
    return await pages.findOne({ _id: ObjectId });
}
const update = async (id, { page_id, page_name, page_description }) => {
    const result = await pages.replaceOne({ _id: ObjectId(id) }, { page_id, page_name, page_description });
    return result.ops[0];
}
const removeById = async id => {
    await pages.deleteOne({ _id: ObjectId(id) });
}
module.exports={
    save,
    getAll,
    getById,
    update,
    removeById
}