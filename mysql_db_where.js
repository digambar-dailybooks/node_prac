var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: "3308",
    password: "",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    //let sql="SELECT * FROM customers WHERE address = 'Park Lane 38'";
    //let sql="SELECT * FROM customers WHERE address LIKE 'S%'";

    //with escape
    /*var adr = 'Mountain 21';
    var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    });*/

    //placeholder
    /*var adr = 'Mountain 21';
    var sql = 'SELECT * FROM customers WHERE address = ?';
    con.query(sql, [adr], function (err, result) {
    if (err) throw err;
    console.log(result);
    });*/

  //multiple placeholder
    var name = 'Amy';
    var adr = 'Mountain 21';
    var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
    con.query(sql, [name, adr], function (err, result) {
    if (err) throw err;
    console.log(result);
    });

    
  });