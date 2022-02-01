const products= require('./index').db('CRED').collection('user');

const ObjectId=require('mongodb').ObjectId;


const save=async({first,last,email,password,confirmpassword})=>{
    const result = await products.insertOne({first,last,email,password,confirmpassword});

    return result.ops[0];
}
const getAll=async()=>{

    const cursor=await products.find();

    return cursor.toArray();
}
console.log("jhv")