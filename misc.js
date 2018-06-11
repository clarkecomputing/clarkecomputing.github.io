if(window.innerWidth<window.innerHeight){
  document.getElementById("menubutton").style.display="block";
}else{
  document.getElementById("menu").style.display="block";
  var portfolioimgs=document.getElementsByClassName("portfolioimg");
  for(i=0; i<portfolioimgs.length; i++) {
   portfolioimgs[i].style.width="40%";
 }
}
function up(){
  var url = location.href;
  location.href = "#top";
  history.replaceState(null,null,url);
}
var menu=0;
function menuclick(){
var top=document.getElementById("menutop");
var middle=document.getElementById("menumiddle");
var bottom=document.getElementById("menubottom");
if(menu==0){
  middle.style.display="none";
  top.style.transform="rotate(45deg)";
  bottom.style.transform="rotate(-45deg)";
  top.style.top="40%";
  bottom.style.top="40%";
  menu=1;

  document.getElementById("menumobile").style.display="block";
}else{
  middle.style.display="block";
  top.style.transform="rotate(0deg)";
  bottom.style.transform="rotate(0deg)";
  top.style.top="15%";
  bottom.style.top="65%";
  menu=0;
  document.getElementById("menumobile").style.display="none";
}
}
