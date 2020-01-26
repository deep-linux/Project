var vari=require('./variable.js');
var con=require('./db.js')
module.exports=function(x,y){con.query('select * from class where roll=?',[x],function (err, result){
  if (err) throw err;
 vari=result;
 y.send(vari);
});
;}