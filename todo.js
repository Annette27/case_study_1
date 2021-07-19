 function ajax(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4&& this.status==200){
          var response = JSON.parse(this.responseText);
          var k = '<table>'
          for(i = 0; i <1 ; i++){
            k+= '<tr>';
            k+= '<td ><input type="checkbox" onchange="selectAll()" name="chk1"  class="form-check-input" ></td>'
            k+= '<th id="head">' + "THINGS TO DO" + '</th>'
            '</tr>'
          }
         for(i = 0;i < response.length; i++){
              k+= '<tr >';
              k+= '<td><input type="checkbox" class="check" name="chk" onchange="post()" class="form-check-input" ></td>';
              k+= '<td class="itemName">' + response[i].title + '</td>';
              k+= '</tr>';
              }
              k+='</table>';
          document.getElementById('demo').innerHTML = k;
          diabling(response,k)
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
  }
    
    function diabling(x ,y){
      for( var i=0 ;i<x.length;){
        if(x[i].completed == true){
          document.getElementsByClassName("check")[i-1].checked = true;
          document.getElementsByClassName("check")[i-1].disabled = true;
          i++;
        }
        else{
          i++;

        }
      } 
    }
        function post (){
         var promise= new Promise(function(resolve){
         var a = document.getElementsByName("chk")
         var newvar = 0;
         for (let i= 0; i < a.length; i++) {
             if(a[i].checked==true && a[i].disabled !=true){
                newvar = + newvar+1;
              }
          }

         if(newvar==5){
            resolve();
           }
        })
        promise
        .then(function(){
           alert("Congrats. 5 Tasks have been Successfully Completed ")  
        })

    }
    function selectAll (){
      var b = document.getElementsByName("chk1")
      if(b[0].checked==true  ){
        var a = document.getElementsByName("chk") 
        for (let i= 0; i < a.length; i++) {
              if(a[i].disabled !=true){
              a[i].checked=true;
              }
        }
        document.getElementById("label").innerHTML="All DONE !!"
      }
      if(b[0].checked!=true ){
        var a = document.getElementsByName("chk") 
        for (let i= 0; i < a.length; i++) {
          if(a[i].disabled !=true){
            a[i].checked=false;
            }
        }
        document.getElementById("label").innerHTML=""
      }
     }
     function checked (){
        var b=$("table tr")
        displayAll(b);
        var a = document.getElementsByName("chk") 
        for (let i= 0; i < a.length; i++) {
          if(a[i].checked!=true){
            b[i+1].style.display = "none";
          }
        }
      }
      function unChecked (){
        var b=$("table tr")
        displayAll(b);
        var a = document.getElementsByName("chk") 
        for (let i= 0; i < a.length; i++) {
          if(a[i].checked==true){
            b[i+1].style.display = "none";
          }
        }
      } 
      function checkAll (){
        var b=$("table tr")
        var a = document.getElementsByName("chk") 
        for (let i= 0; i < a.length; i++) {
          if(a[i].checked==true || a[i].checked!=true){
            b[i+1].style.display = "";
          }
        }
      } 
      function displayAll(x){
      for (let i= 0; i < x.length; i++) {
        if(x[i].style.display == "none"){
          x[i].style.display = "";
         }
        }
      }

 
     