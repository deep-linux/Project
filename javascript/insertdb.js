//global.json=0;
var o=require('./variable.js');
var con=require('./db.js')
module.exports=function (x,y){ con.query('insert into class(name,roll) values(?,?)',[x,y], function (err, result) {
   if (err) throw err;
   console.log("1 record inserted");

 });
}

//msg variable becomes function expression 
