module.exports=function (){
    let csvToJson = require('convert-csv-to-json');
 
let fileInputName = 'public/uploads/data.csv'; 
let fileOutputName = './public/json/data.json';

csvToJson.formatValueByType().getJsonFromCsv(fileInputName); //number will be printed as a Number type and not as a String type
csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);

  console.log("file is "+ fileOutputName)

}

