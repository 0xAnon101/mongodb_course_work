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

    },(err)=> {
        console.log("There is an error ,"+err);
    });

   //delete one
   db.collection('Todos').deleteOne({text: "raju"})
   .then((result) => {
       console.log(result)

   },(err)=> {
       console.log("There is an error ,"+err);
   });
   
   //findone and delete one
    db.collection("Todos").findOneAndDelete({completed: false})
        .then((result)=>{

            console.log(result);
            db.collection('Todos').insertOne(value,(err,result)=> {
                if(err)  throw err;
                console.log(JSON.stringify(res.ops[0],undefined,3));
            });


        },(err)=>{
            console.log("error rigt now...");
        });
});
