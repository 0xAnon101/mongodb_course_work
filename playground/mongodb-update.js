
const {MongoClient,ObjectID} =  require("mongodb");

 
MongoClient.connect("mongodb://127.0.0.1:27017",(err,client)=>{
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log("connected to MongoDB server");

    //set up client object containng data object
    var db = client.db("TodoApp")
    db.collection("Todos").findOneAndUpdate({
       _id : new  ObjectID("5ae4966ae3b0cd11beea6b3d")
    },
    { $set: {name: "raju gautam"} }, {returnOriginal: true}, (err, result) => {

        if(err)
            throw err ; 
        else {
            console.log(`The Result eeis ${result.value.name}`);
        }
    });

    db.collection("Todos").findOneAndUpdate({
       _id : new ObjectID("5ae49640eec78910a4304e7d")
     },
     { $inc: {age: 1} }, {returnOriginal: false}, (err, result) => {
 
         if(err)
             throw err ; 
         else {
             console.log(`The Result eeis ${result.value.name}`);
         }
     });

    client.close()
});
