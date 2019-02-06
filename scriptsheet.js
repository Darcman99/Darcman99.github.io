const ordinalSuffix=["st","nd","rd"];
const addSuffix=n=>n+(ordinalSuffix[(n-1)%10]||"th");
const numberToOrdinal=n=>"${n}".match(/1\d$/)?n+"th":addSuffix(n);
function bookmarks(){
	content.classList.add("fade");
	content.src="bookmarks.html";
	content.style.display="block";
	contentparent.classList.add("backgroundfade");
	main.classList.add("main");
}
function date(){
	var date=new Date();
	var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
	document.getElementById("date").innerHTML=months[date.getMonth()]+"&nbsp;"+numberToOrdinal(date.getDate())+",&nbsp;"+date.getFullYear();
}
function keypress(event){
	var code1=event.keyCode;
	switch(code1){
		case 65:
		if(code2==78){
			window.open("https://www.nab.com","_blank");
		}
		break;
		case 67:
		window.open("https://codepen.io","_blank");
		break;
		case 69:
		if(code2==78){
			window.open("https://www.netflix.com/au","_blank");
		}
		break;
		case 70:
		window.open("https://www.facebook.com","_blank");
		break;
		case 73:
		if(code2==71){
			window.open("https://github.com","_blank");
		}
		break;
		case 75:
		window.open("https://keycode.info","_blank");
		break;
		case 77:
		if(code2==71){
			window.open("https://www.gmail.com","_blank");
		}
		break;
		case 83:
		window.open("https://www.stan.com.au","_blank");
		break;
		case 89:
		window.open("https://www.youtube.com","_blank");
		break;
	}
	code2=code1;
}
function refresh(){
	location.reload();
}
function search(){
	var input,filter,ul,li,a,i;input=document.getElementById("bookmarkssearch");
	li=document.getElementById("bookmarks").getElementsByTagName("li");
	filter=input.value.toUpperCase();
	for(i=0;i<li.length;i++){
		a=li[i].getElementsByTagName("a")[0];
		if(a.innerHTML.toUpperCase().indexOf(filter)>-1){
			li[i].style.display="";
		}
		else{
			li[i].style.display="none";
		}
	}
}
function time(){
	var time=new Date();
	var minutes=time.getMinutes();
	var hours=time.getHours();
	var halfhours=hours;
	if(halfhours>12){
		halfhours=hours-12;
	}
	else if(hours===0){
		halfhours=12;
	}
	if(minutes<10){
		minutes="0"+minutes;
	}
	else{
		minutes=minutes;
	}
	if(hours<12){
		document.getElementById("ampm").innerHTML="AM";
	}
	else{
		document.getElementById("ampm").innerHTML="PM";
	}
	date();
	document.getElementById("time").innerHTML=halfhours+":"+minutes;
}
navigator.getBattery().then(function(battery){
	battery.addEventListener("levelchange",function(){
		document.getElementById("charge").style.width=(battery.level*100)+"vw";
	}
	)
	document.getElementById("charge").style.width=(battery.level*100)+"vw";
}
)
setInterval(time,1000);
time();
var background="";
var code2="";
var content=document.getElementById("content");
var contentparent=document.getElementById("contentparent");
var main=document.getElementById("main");