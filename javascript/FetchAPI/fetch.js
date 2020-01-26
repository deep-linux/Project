const fetch = require('node-fetch');
app.get('/fetch', function (req, res) {
 res.sendFile(path.join(__dirname+'/fetch.html'));
})
app.get('/fetchjson', function (req, res) {
  res.sendFile(path.join(__dirname+'/fetchjson.html'));
 })

