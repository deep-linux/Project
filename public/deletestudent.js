var key=[]
var json;

function myFunction(){
//  var table=document.getElementById('table') ;
  
 
  fetch('http://192.168.1.6:8080/json/data.json', {
headers: {
  "Content-Type": "application/json"
}
})
  .then(function(response) {
    if (!response.ok) {
    
      
        throw new Error('HTTP error, status = ' + response.status);
    }
    return response.json();
  })
  .then(function(myBlob){
    function table()
   { var table=document.getElementById('table') ;
   
    var b="<b>Index</b>"
     var c="<b>Roll<b/>"
     var d="<b>Name<b/>"
     var e="<b>P/A</b>"
     json=myBlob.length;
     console.log(1) 
     var row = table.insertRow(0);

     console.log(1)
     
     var cell1 = row.insertCell(0);
     var cell2 = row.insertCell(1);
     var cell3 = row.insertCell(2);
     var cell4=  row.insertCell(3);
     var cell5=  row.insertCell(4);
     
     cell2.innerHTML = b;
     cell3.innerHTML = c;
     cell4.innerHTML = d; 
     cell5.innerHTML = e;  

     for (i=0;i<myBlob.length;i++)
    { 
    var row = table.insertRow(-1);
    mark[i+1] =document.createElement("input")
    mark[i+1].setAttribute("type","checkbox")
    mark[i+1].value=i+1
    mark[i+1].id=i+1
    
     var a=myBlob[i]
      console.log(myBlob[i])
    var b=a.Index
     var c=a.Roll
     var d=a.Name
     key[i+1]=i+1

     var cell1 = row.insertCell(0);
     var cell2 = row.insertCell(1);
     var cell3 = row.insertCell(2);
     var cell4 = row.insertCell(3);
     var cell5 = row.insertCell(4);
     cell1.innerHTML = key[i+1];
     cell2.innerHTML = b;
     cell3.innerHTML = c;
     cell4.innerHTML = d;
     cell5.appendChild(mark[i+1]);
     //cell4.innerHTML = "";
     //cell4.id=i+1;

     //new row
     //var td = tr.appendChild();
     //table.appendChild(td);//document.getElementById("myList").innerHTML = this destroy whole id then edit
    //console.log(b)
  }
} 
