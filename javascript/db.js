var mysql = require('mysql');
var con = mysql.createPool({
  host: "localhost",
  user: "nodejs",
  password: "nodejs",
  database: "example"
  //debug: true
});
module.exports=con;
