var christmasdate = new Date("2024-12-26"); //Putting 2024-12-25 makes the variable do a day after
//var christmasdate = new Date("December 25, 2020");
var currentdate = new Date();
var currentmonth = currentdate.getMonth() + 1;
var currentday = currentdate.getDate() + 1;

christmasdate.setFullYear(currentdate.getFullYear());
console.log(currentmonth);
document.getElementById("christmascounter").innerHTML=  (12 - currentmonth) +" months, " + (25 - currentday + 1) + " days";




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

  case 2:
    present2.style.order=numberpicked;
    present2.style.width="25%";
    present2.style.height="40%";

  case 3:
    present3.style.order=numberpicked;
    present3.style.width="10%";
    present3.style.height="100%";

  case 4:
    present4.style.order=numberpicked;
    /*present4.style.width="50%";
    present4.style.height="100%";*/

}

  slotsfilled[x-1]=numberpicked;
}

}
