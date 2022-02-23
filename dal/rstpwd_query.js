const products = require('./index').db('CRED').collection('user');
const ObjectId = require('mongodb').ObjectId;

const rstpwd = async (id, { password,confirmpassword }) => products.updateOne({_id: ObjectId(id)},{$set: { password,confirmpassword }})
 
module.exports={rstpwd}
