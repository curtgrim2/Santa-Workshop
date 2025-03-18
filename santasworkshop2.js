var christmasdate = new Date("2024-12-26"); //Putting 2024-12-25 makes the variable do a day after
//var christmasdate = new Date("December 25, 2020");

/*
fetch('https://restcountries.com/v3.1/all')
.then(response=>response.json())
.then(data=>console.log(data) )
.catch(error=> console.error('Error:',error))
*/

var allcountries;
//getcountries();
 async function getcountries(whichpresent){
  try{
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data  = await response.json();
    var pickcountry = Math.floor(Math.random()*250);
    var countryname=data[pickcountry].name.common;
    //console.log(countryname);
    document.getElementById(whichpresent).innerHTML=countryname;
    return countryname;

  }
  catch(error){
    console.error("Error:",error);
  }
}

async function getnames(){
  try{
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    console.log(data.results[0].name.first);
    document.getElementById('fallingpresent').innerHTML = data.results[0].name.first + " " + data.results[0].name.last;
    fallingpresent.style.animationPlayState="running";
  }
  catch(error){
    console.error("Error:",error);
  }
}

/*
const getdata = async () => {
  const data2 = await getcountries();
  console.log(data2);
  var allcountries=data2;
};*/
//const allcountries = await getcountries();
//console.log(allcountries);

let timer = setInterval(clock,1000);
function clock(){
  var currentdate = new Date();
  var currentmonth = currentdate.getMonth() + 1;
  var currentday = currentdate.getDate() + 1;
  var currenthour = currentdate.getHours()+1;
  var currentminutes = currentdate.getMinutes()+1;
  var currentseconds = currentdate.getSeconds()+1;


  christmasdate.setFullYear(currentdate.getFullYear());

/*  var displaymonth =(12 - currentmonth) +" months, ";
  var displaydays= (25 - currentday ) + " days, ";
  var displayhours= (24- currenthour) + " hours, ";
  var displaymins= (60-currentminutes) + " minutes, ";
  var  displaysecs = (60-currentseconds)+" seconds";*/

  if((12 - currentmonth)==1){
    document.getElementById("monthsaway").innerHTML = (12 - currentmonth) +" month, ";
  }
  else{
    document.getElementById("monthsaway").innerHTML = (12 - currentmonth) +" months, ";
  }

if((25 - currentday )==1){
  document.getElementById("daysaway").innerHTML = (25 - currentday ) + " day, ";

}
else{
  document.getElementById("daysaway").innerHTML = (25 - currentday ) + " days, ";

}

if((24- currenthour)==1){
  document.getElementById("hoursaway").innerHTML = (24- currenthour) + " hour, ";
}
else{
  document.getElementById("hoursaway").innerHTML = (24- currenthour) + " hours, ";
}

  if((60-currentminutes)==1){
    document.getElementById("minutesaway").innerHTML = (60-currentminutes) + " minute, ";
  }
  else{
    document.getElementById("minutesaway").innerHTML = (60-currentminutes) + " minutes, ";
  }

  if((60-currentseconds)==1){
    document.getElementById("secondsaway").innerHTML = (60-currentseconds)+" second";
  }
  else{
    document.getElementById("secondsaway").innerHTML = (60-currentseconds)+" seconds";
  }
  //document.getElementById("christmascounter").innerHTML= displaymonth  + displaydays + displayhours + displaymins + displaysecs;
}

var fallingpresent = document.getElementById("fallingpresent");
fallingpresent.addEventListener("animationiteration",presentforperson);
//fallingpresent.addEventListener("animationstart",play);
var pauseanimation2 = setInterval(getnames,9000);

function presentforperson(){
  clearInterval(pauseanimation2);
  fallingpresent.style.animationPlayState="paused";
  pauseanimation2 = setInterval(getnames,7200);
   console.log("An animation is about to play in 7.2 seconds");
   //getnames();
}
function play (){
  fallingpresent.style.animationPlayState= "running";
  //let pauseanimation2 = setInterval(getnames,9000);
}


var present1 = document.getElementById("present1");
var present2 = document.getElementById("present2");
var present3 = document.getElementById("present3");
var present4 = document.getElementById("present4");

var groupofpresents = document.getElementById("groupofpresents");
groupofpresents.addEventListener("animationiteration",newpresents);

function newpresents(){
var totalpresents=4;
var slotsfilled = [];


for(var x=1; x<=4;x++){

var numberpicked = Math.floor(Math.random()*totalpresents)+1;
for(var y=0;y<slotsfilled.length; y++){
 if(slotsfilled[y]==numberpicked){
    numberpicked = Math.floor(Math.random()*totalpresents)+1;
    y=0;
 }
}
//console.log(numberpicked);

switch(x){
  case 1:
    present1.style.order=numberpicked;
    present1.innerHTML=getcountries("present1");

  case 2:
    present2.style.order=numberpicked;
    present2.style.width="10%";
    present2.style.height="40%";
    present2.innerHTML=getcountries("present2");

  case 3:
    present3.style.order=numberpicked;
    present3.style.width="4%";
    present3.style.height="100%";
    present3.innerHTML=getcountries("present3");

  case 4:
    present4.style.order=numberpicked;
    present4.innerHTML=getcountries("present4");

    /*present4.style.width="50%";
    present4.style.height="100%";*/

}

  slotsfilled[x-1]=numberpicked;
}

}


var boxincart = document.getElementById("boxincart");
boxincart.addEventListener("animationstart",startanimation)
boxincart.addEventListener("animationiteration",startanimation)


function startanimation(){
  boxincart.innerHTML = "";
  boxincart.style.backgroundColor="#ad7547";
  boxincart.style.left="30%";
  boxincart.style.top="-55";
  boxincart.style.transform="translateX(0%)";

  //console.log("does thiw reafh?");
  let transform2 = setTimeout(transformtopresent,1900);
}

function transformtopresent(){
  //boxincart.style.background="rgba(0,0,0,0)";
  boxincart.innerHTML = "&#x1F381";
   boxincart.style.fontSize="500%";
  boxincart.style.top="-100";
  boxincart.style.right="0";
  boxincart.style.transform="translateX(-25%)";
  //document.getElementById("cart").style.textAlign="right";
}
