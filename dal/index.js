const {MongoClient}=require("mongodb");
const client = new MongoClient("mongodb+srv://strongdemon:kdb65GK6zYJvRcg@strong.obgla.mongodb.net/myFirstDatabase?authSource=admin&replicaSet=atlas-lnv1hu-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true",{
    
    useNewUrlParser:true,
    useUnifiedTopology:true
});


client.connect(err=>{

    if(err){
        console.error(err);
        process.exit(-1);
    }
    console.log("connected to mongo")
})

module.exports=client;