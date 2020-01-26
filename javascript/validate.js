const basicAuth = require('express-basic-auth')
myform(){
var a=document.forms["myForm"]["1"].value
var b=document.forms["myForm"]["2"].value
console.log(a) 
app.use(basicAuth({
    users: { 'admin': 'supersecret' }
}))
