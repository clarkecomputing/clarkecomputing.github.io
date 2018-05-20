type("Your Online Presence Matters more than your Physical One.");
if(window.innerWidth<window.innerHeight){
document.getElementById("chatbotdiv").style.height="70vh";
}
function up(){
  var url = location.href;
  location.href = "#top";
  history.replaceState(null,null,url);
}

function type(word){
  document.getElementById("typey").innerHTML=document.getElementById("typey").innerHTML+word.substr(0,1);
  if(word.length>0){
  setTimeout(function(){type(word.substr(1, word.length))}, 50);
    }else{

    }
  }
 
  var canvas=document.getElementById("backdrop");
  var ctx = canvas.getContext('2d');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.fillStyle="white";
  ctx.strokeStyle="white";
  ctx.lineWidth=1;
  var h=canvas.height/2;
  var w=canvas.width/2;
  var sp=[];
  var m=Math.max(w,h)
  for(i=0;i<m;i=i+10){
  sp.push(new spiral());
  }
  function spiral() {
  this.sa=2*Math.PI*Math.random();
  this.ea=2*Math.PI*Math.random();
  this.speed=(Math.random()*10-5)/20;
  }
  setInterval(function(){refresh(); }, 100);
  function refresh(){
  ctx.clearRect(0,0,canvas.width, canvas.height);
  for(i=0;i<sp.length;i=i+1){
  ctx.beginPath();
  ctx.arc(w,h,i*10,sp[i].sa,sp[i].ea);
  sp[i].sa+=sp[i].speed;
  sp[i].ea+=sp[i].speed;
  //sp[i].speed+=(Math.random()*10-5)/50;;
  ctx.stroke();
  }
  }
