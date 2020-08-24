var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/mydb";
var url="mongodb+srv://Dig123:Dig@123@firstmongo.irv6o.mongodb.net/mydb?retryWrites=true&w=majority";

MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
    if (err) throw console.log(err);
    var dbo = db.db("mydb");
    var myquery = { address: 'Sideway 1633' };
    dbo.collection("customers").deleteOne(myquery, function(err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        db.close();
    });
});