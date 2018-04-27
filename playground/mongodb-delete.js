const {MongoClient,ObjectID} =  require("mongodb");

 
MongoClient.connect("mongodb://127.0.0.1:27017",(err,client)=>{
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log("connected to MongoDB server");

    //set up client object containng data object
    var db = client.db("TodoApp")

   //delete many
   db.collection('Todos').deleteMany({text: "raju gautam"})
    .then((result) => {
        console.log(result)

    },(err=> {
        console.log("There is an error ,"+err);
    }));

   //delete one

   //findone and delete one

});
