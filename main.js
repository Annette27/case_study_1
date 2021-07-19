    $(document).ready(function(){
    let email = document.getElementById("InputEmail1");
    let error1 = document.getElementById("error1");
    let error2 = document.getElementById("error2");
    let pwd = document.getElementById("pwd");
    let showBtn = document.getElementById("showBtn")
    let btn1 =document.getElementById("btn1")

    showBtn.style.display = "block";
    showBtn.onclick = function(){
      if(pwd.type == "password"){
        pwd.type = "text";
        showBtn.textContent = "HIDE";
        // showBtn.style.color = "#23ad5c";
      }else{
        pwd.type = "password";
        showBtn.textContent = "SHOW";
        // showBtn.style.color = "#000";
      }
    }
    function callback() {
        $("#form").attr('action','todo.html')
    }

     $("#btn1").click(function(callback){
         validate(callback);
     })
     
 function validate(callback){
      if(email.value==""){
       }
    else{
        if(email.value==="admin"){
            error1.innerHTML = "valid";
            error1.style.color= "green";
            if(pwd.value==""){
            }
            else{
                if(pwd.value==="12345"){
                    error2.innerHTML = "password correct";
                    error2.style.color= "green";
                    $("#form").attr('action','todo.html')
                    callback();
                }
            else{
                error2.innerHTML = "password incorrect";
                error2.style.color = "red";
                return false;
                }
            }
        }
    else{
        error1.innerHTML = "Invalid Username"; 
        error1.style.color = "red";
        return false;
    }
    }
};
})   
