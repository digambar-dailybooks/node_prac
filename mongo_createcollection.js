var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/mydb";
var url="mongodb+srv://Dig123:Dig@123@firstmongo.irv6o.mongodb.net/mydb?retryWrites=true&w=majority";

MongoClient.connect(url,{ useUnifiedTopology: true },function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.createCollection("suppliers", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  });