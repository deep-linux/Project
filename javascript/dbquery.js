var vari=require('./variable.js');
var con=require('./db.js')
app.get('/:id', function(req, res){
res.setHeader('Content-Type', 'application/json');
var x =req.params.id;
var json=getdata(x,res);
}); 

module.exports=function(x,y){con.query('select * from class where roll=?',[x],function (err, result){
  if (err) throw err;
 vari=result;
 y.send(vari);
});
;}
