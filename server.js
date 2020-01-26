var fs= require('fs')
var path=require('path')
var express=require('express')
var app=express();
var bodyParser = require('body-parser');
var csvjson=require('./javascript/csvjson/csv2json')  
var tableq=require('./javascript/tablequery') 
var multer = require('multer');
var router = express.Router();
var cookieSession = require('cookie-session')
var mysql = require('mysql');
var file = require("./public/json/data.json")
var json=[]

var con  = mysql.createPool({  //pool.query
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'nodejs',
  password        : 'nodejs',
  database        : 'example'
  
});
app.use(function (req, res, next) {
  console.log("Welcome"+req.connection.remoteAddress)
  next()
})
var users=["admin","user"]
var sethead=function(req,res,next){
 //var x=Buffer.from(req.body.id+":"+req.body.pass).toString('base64')
res.header('Authorization','Bearer '+ x)
req.headers.Authorization = '"Authorization","Bearer "+ x';
 console.log(req.headers.authorization)
next();
}
const basicAuth = require('express-basic-auth')


var auth=function (req,res,next)
{ console.log(req.body.id+"   "+req.session.user)
if((req.body.id =="admin"&&req.body.pass=="pass")||(req.body.id =="user"&&req.body.pass=="pass")||req.session.user==("admin"||"user"))
{//res.write("Redirecting");
if(req.session.user!=("admin"||"user"))
{req.session.user=req.body.id;
console.log("Hello")}
console.log("passed--"+req.session.user)
console.log(req.session.user)

next()
}
else {
res.sendFile(path.join(__dirname+'/html/unauth.html')); 
console.log(req.connection.remoteAddress+" Unauthorised")
}}
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))
app.use(function (req, res, next) {
  req.session.view = (req.session.view || 0) + 1
console.log(req.session.view )
next();
})

// var con=require('./db.js');
// var db=require('./script.js')
// var vari=require('./variable.js')
// var getdata=require('./fetch.js')
// var id=require('./display.js');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, 'data.csv')
  }
})



var upload = multer({storage:storage}) 
//app.use(auth) 
app.get('/charts', function(req, res){
 res.sendFile(path.join(__dirname+'/html/charts3.html'))})  


app.get('/', function(req, res){
if(req.session.user==("admin")){
  res.sendFile(path.join(__dirname+'/html/welcomeadmin.html'))}
else res.sendFile(path.join(__dirname+'/html/main.html'))})
app.get('/add', function(req, res){
 res.sendFile(path.join(__dirname+'/html/add.html'))})

app.get('/key', function(req, res){
  res.sendFile(path.join(__dirname+'/html/key.html')); 

})
app.get('/fetch/:id1/:id2/:id3', function(req, res){
  console.log(req.params.id2);
})
app.get('/delete', function(req, res){
  res.sendFile(path.join(__dirname+'/html/add.html')); 
var a=req.query.key
var b=req.query.pass
console.log(req.query)
 con.query('delete from user(k,pass) values(?,?)',[a,b], function (err, result) {
   if (err) throw err;
   console.log("1 record inserted");
 });
}
)
app.get('/verify', function(req, res){
  res.sendFile(path.join(__dirname+'/html/add.html')); 
var a=req.query.key
var b=req.query.pass
console.log(req.query)
 con.query('insert into user(k,pass) values(?,?)',[a,b], function (err, result) {
   if (err) throw err;
   console.log("1 record inserted");
 });
}
)

app.get('/login', function(req, res){
  res.sendFile(path.join(__dirname+'/html/login.html'));}) 
 
app.use(auth)
app.post('/logged',function(req,res){
//if(req.session.user==("admin")){
  res.sendFile(path.join(__dirname+'/html/welcomeadmin.html'))})
//else if(req.session.user==("user")){
 // res.sendFile(path.join(__dirname+'/html/welcomeadmin.html'))}})

app.get('/signout', function(req, res){
req.sessionKey==null;
  res.sendFile(path.join(__dirname+'/html/signout.html'));
req.session =null})
{app.get('/about', function (req, res) {if (a==0)
  {res.send("about doesn't exist")}
else res.sendFile(path.join(__dirname+'/html/unauth.html'));})}


app.use(auth)

app.get('/file', 
  function(req, res){
var x=tableq(file)
res.end(x)})
app.get('/json', 
  function(req, res){console.log('1')

   res.setHeader('Content-Type', 'application/json');
   res.send('[ {"name":"Ram", "email":"Ram@gmail.com"},{"name":"Bob", "email":"bob32@gmail.com"},{"name":"Akash", "email":"Akash@gmail.com"} ]');})
app.get('/view', 
  function(req, res){
  res.sendFile(path.join(__dirname+'/html/test.html'));
//res.sendFile(path.join(__dirname+'/public/dynamic.js'))
console.log(req.query)
async function fun(){
var a=req.query.Branch
var b=req.query.Section
console.log(a,b)
var c='select * from '+a+b;
console.log(c)
await con.query(c,function (err, result){json=result
console.log("json"+json)
var njson = JSON.stringify(json);
console.log(njson)
fs.writeFile('public/json/dat.json', njson,function(err) {

    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});
})
}
fun()
 
})

app.get('/attendance', function(req, res){
  res.sendFile(path.join(__dirname+'/html/markatt.html'));
//  res.sendFile(path.join(__dirname+'/public/dynamicmark.js'));
})

app.get('/upload', function(req, res){
 res.sendFile(path.join(__dirname+'/html/upload.html'))

})

app.get('/search', function(req, res){
 res.sendFile(path.join(__dirname+'/html/displaydynamictable.html'))
//var json=getdata(x,res);
console.log(req.query)})

 app.get('/table', 
  function(req, res){console.log('1')
   res.setHeader('Content-Type', 'application/json');
tableq();
})
//return new Promise(function (resolve){resolve(a=5)})
app.post('/uploading', upload.single('myFile'), (req, res) => {
  
  if (req.file) {
      console.log('Uploading file...');
      var filename = req.file.filename;
      var uploadStatus = 'File Uploaded Successfully';
  } else {
      alert('No File Uploaded');
      var filename = 'FILE NOT UPLOADED';
      var uploadStatus = 'File Upload Failed';
  }
  


async function dostuff(){
await csvjson().then(tableq(file));}
dostuff();

  /* ===== Add the function to save filename to database ===== */
  res.end(); 
  
});
app.listen(8080);
