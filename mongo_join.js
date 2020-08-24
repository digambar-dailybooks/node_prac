var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/mydb";
var url="mongodb+srv://Dig123:Dig@123@firstmongo.irv6o.mongodb.net/mydb?retryWrites=true&w=majority";

MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
    if (err) throw console.log(err);
    var dbo = db.db("mydb");

    dbo.collection('orders').aggregate([
        { $lookup:
           {
             from: 'products',
             localField: 'product_id',
             foreignField: '_id',
             as: 'orderdetails'
           }
         }
        ]).toArray(function(err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res));
        db.close();
      });
      
});