var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, 'data.csv')
    }
  })
  
var upload = multer({storage:storage})

app.post('/upload', upload.single('myFile'), (req, res) => {
  
    if (req.file) {
        console.log('Uploading file...');
        var filename = req.file.filename;
        var uploadStatus = 'File Uploaded Successfully';
    } else {
        console.log('No File Uploaded');
        var filename = 'FILE NOT UPLOADED';
        var uploadStatus = 'File Upload Failed';
    }
    csvjson();
    /* ===== Add the function to save filename to database ===== */
    res.end(); 
    
  });