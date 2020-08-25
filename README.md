Node Prac Projects
Date :- 21-08-2020

//Inbuild modules
-http
-url
-fs
-events

//install module through npm
-mysql
-mongodb
-upper-case (uc.upperCase)
-formidable (new formidable.IncomingForm)
-nodemailer (email services)


//http
http.createServer(function(req,res){}).listen(3200)  //create a server object:
.listen(3200);   //the server object listens on port 3200
res.writeHead    //response header
res.write        //write a response to the client
res.end          //end the response
req.url          //url request

//url
var q = url.parse(adr, true); // parse url
q.host //host
q.pathname //pathname
q.search  //search querystring
q.query   //querystring

//filesystem FS
fs.readFile('demofile1.html', function(err, data){}); //read given file
fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {}); // append file
fs.unlink('mynewfile2.txt', function (err) {}); //unlink file
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {}); //rename file
fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {}); //writefile
fs.copyFile(oldpath, newpath, function (err) {}); //copyfile

//Events
var eventEmitter = new events.EventEmitter(); //create event object                       
var myEventHandler    //Create an event handler
eventEmitter.on('Play', myEventHandler);  //Assign the event handler to an event
eventEmitter.emit('Play');  //Fire the 'Play' event:

//uppercase string
 res.write(uc.upperCase("Hello World!"));

//Send Email
nodemailer.createTransport({service: 'gmail',auth: { user: '',pass: ''}}); //create transport
mailOptions = {from:'',to:'',subject:'',html='',text=''};
transporter.sendMail(mailOptions, function(error, info){});//send email

//fileupload 
-Display form with res.write
-Post form
-form.parse //parse form
-fs.copyFile oldpath to new path //copyfile

//mysql functions
mysql.createConnection({host:'',port:'',user:'',password:''}); //connect mysql DB
con.connect()  //actual connection
con.query()   //actual query
con.query(sql, [values],  function (err, result) //query with bulk values
result.affectedRows //result affectedRows
result.insertId //last inserted ID

//MongoDB functions
-MongoClient.connect   //connect Mongodb connect
-dbo.createCollection //mongo createcollection
-dbo.collection("customers").deleteOne(myquery) //mongo deleteone
-dbo.collection("suppliers").drop()  //drop collection
-dbo.collection("customers").findOne({}, function(err, result)  //findone
-dbo.collection("customers").find({}, { projection: { address: 0 }}).toArray() //find collection
-dbo.collection("customers").find().limit(5).toArray() //limit
-dbo.collection("customers").find(query).sort(mysort).toArray() //sort
-dbo.collection("customers").insertMany(myobj, function(err, res) //insert many
-dbo.collection("customers").insertOne(myobj, function(err, res) //insertOne
-dbo.collection('orders').aggregate() //aggregate collection
-dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) //updatone
-dbo.collection("customers").updateMany(myquery, newvalues, function(err, res)//updateMany


