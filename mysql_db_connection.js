var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tata_motors"
  //password: "Db#ks@1J2"
  //password: "Db@ks#1407"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});