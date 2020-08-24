var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/mydb";
var url="mongodb+srv://Dig123:Dig@123@firstmongo.irv6o.mongodb.net/mydb?retryWrites=true&w=majority";

MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
    if (err) throw console.log(err);
    var dbo = db.db("mydb");

    //var query = { address: "Park Lane 38" };
    //var query = { address: /^S/ };
    var query ='';
    var mysort = { name: -1 };
    dbo.collection("customers").find(query).sort(mysort).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });

});