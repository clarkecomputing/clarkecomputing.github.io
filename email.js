(function(){
   emailjs.init("user_jREWum9z3YCWAG17rUsxu");
})();

function send(){
  name=document.getElementById("name").value;
  email=document.getElementById("email").value;
  msg=document.getElementById("msgform").value;
  sendemail(name,email,msg);
  document.getElementById("formdiv").style.display="none";
  document.getElementById("sentdiv").style.display="block";
}

function sendemail(name,email,msg){
emailjs.send("gmail", "contact", {"name":name,"email":email,"msg":msg})
  }
