var con=require('./db.js')

//const data = require('public/json/data.json') //static not include /public

//res.setHeader('Content-Type', 'application/json');

module.exports=function(file){
var val=[]
for (const item of file) {
var x=item
var a=x.Index;
var b=x.Roll;
var c=x.Name;
val.push([a,b,c])
}
console.log("connected")
 //console.log(file) cannot get file from server.js

console.log("done");

con.query('insert into CS(s,roll,name) values ?',[val],function (err, result){
  if (err) throw err;
console.log(result + " record(s) updated");
})
}
