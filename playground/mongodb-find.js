// const MongoDBClient =  require("mongodb").MongoClient;
const {MongoClient,ObjectID} =  require("mongodb");

 
MongoClient.connect("mongodb://127.0.0.1:27017",(err,client)=>{
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log("connected to MongoDB server");

    //set up client object containng data object
    var db = client.db("TodoApp")

    //fetvhing data
    // db.collection("Todos").find({
    //     _id: new ObjectID("5ae32057af827b287776875e")
    // }).toArray()
    //     .then((docs) => {
    //         console.log("Todos");
    //         console.log(JSON.stringify(docs,undefined,2));

    //     },(err) => {
    //         console.log("Unable to fetch todos",err);
    //     });

    // db.collection("Todos").find({ }).count()
    //     .then((count) => {
    //         console.log(`Todos count ${count}`);
    

    //     },(err) => {
    //         console.log("Unable to fetch todos",err);
    //     });

    db.collection("Todos").find({
        text : "wal the dog"
    }).toArray()
         .then((texts)=> {

            console.log("Todo text: ")
            console.log(JSON.stringify(texts,"dndcdcdcjdidn",3));

        },(err)=>{
            console.log("Unsble to fetch text of Todos!")
        });

    // client.close()
});
