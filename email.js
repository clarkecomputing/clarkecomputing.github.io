(function(){
   emailjs.init("user_jREWum9z3YCWAG17rUsxu");
})();

function send(){
   
  name=document.getElementById("name").value;
  email=document.getElementById("email").value;
  msg=document.getElementById("msgform").value;
  
  if(name!=""&&email!=""&&msg!=""&&email.indexOf('@')>-1){  
      sendemail(name,email,msg);
      document.getElementById("formdiv").style.display="none";
      document.getElementById("sentdiv").style.display="block";
  }else{
   if(name==""){
      document.getElementById("name").style.border="1px red solid";   
   }else{
      document.getElementById("name").style.border="1px white solid";   
   }   
   if(email==""||email.indexOf('@')==-1){
      document.getElementById("email").style.border="1px red solid";   
   }else{
      document.getElementById("email").style.border="1px white solid";   
   }     
   if(msg==""){
      document.getElementById("msgform").style.border="1px red solid";   
   }else{
      document.getElementById("msgform").style.border="1px white solid";   
   }       
     
     
  }   
}

function sendemail(name,email,msg){
emailjs.send("gmail", "contact", {"name":name,"email":email,"msg":msg})
  }
