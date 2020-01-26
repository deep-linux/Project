function myFunction(){
  var table=document.getElementById('table') ;
  
 
  fetch('http://localhost:8080/json', {
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
    function fun()
   { var table=document.getElementById('table') ;
   
    var b="<b>Name</b>"
     var c="<b>Email</b>"
     console.log(1) 
     var row = table.insertRow(0);
     console.log(1)
     
     var cell1 = row.insertCell(0);
     var cell2 = row.insertCell(1);
     cell1.innerHTML = b;
     cell2.innerHTML = c;
     
     for (i=0;i<myBlob.length;i++)
    { //var tr = document.createElement('tr');
    var row = table.insertRow(1);
  
     var a=myBlob[i]
      console.log(myBlob[i])
     var b=a.name
     var c=a.email
     
     var cell1 = row.insertCell(0);
     var cell2 = row.insertCell(1);
     cell1.innerHTML = b;
     cell2.innerHTML = c;
     //new row
     //var td = tr.appendChild();
     //table.appendChild(td);//document.getElementById("myList").innerHTML = this destroy whole id then edit
    //console.log(b)
  }
}
fun();
    //document.body.insertBefore(p,json.src);      
  })
  
  .catch(function(error) {
    var p = document.createElement('p');
    p.appendChild(
      document.createTextNode('Error: ' + error.message)
    );
   
  });
}
