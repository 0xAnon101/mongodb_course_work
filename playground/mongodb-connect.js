// const MongoDBClient =  require("mongodb").MongoClient;
const {MongoClient,ObjectID} =  require("mongodb");

 
MongoClient.connect("mongodb://127.0.0.1:27017",(err,client)=>{
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log("connected to MongoDB server");

    //set up client object containng data object
    var db = client.db("TodoApp")

    //insert a new collection
    // db.collection('Users').insertOne({
    //     name :" ray",
    //     age : 24,
    //     location :" NY city"
    // },(err, res)=>{
    //     if(err) {
    //         return console.log("Unabke to insert User ",err)
    //     }
        
    //     console.log(JSON.stringify(res.ops[0]._id.getTimestamp(),undefined,3))
    // })



    client.close()
});
