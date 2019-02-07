const ordinalSuffix=["st","nd","rd"];
const addSuffix=n=>n+(ordinalSuffix[(n-1)%10]||"th");
const numberToOrdinal=n=>"${n}".match(/1\d$/)?n+"th":addSuffix(n);
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
			localStorage.setItem("lastvisited","https://www.nab.com");
			window.open("https://www.nab.com","_blank");
		}
		break;
		case 67:
		localStorage.setItem("lastvisited","https://codepen.io");
		window.open("https://codepen.io","_blank");
		break;
		case 69:
		if(code2==78){
			localStorage.setItem("lastvisited","https://www.netflix.com/au");
			window.open("https://www.netflix.com/au","_blank");
		}
		break;
		case 70:
		localStorage.setItem("lastvisited","https://www.facebook.com");
		window.open("https://www.facebook.com","_blank");
		break;
		case 73:
		if(code2==71){
			localStorage.setItem("lastvisited","https://github.com");
			window.open("https://github.com","_blank");
		}
		break;
		case 75:
		localStorage.setItem("lastvisited","https://keycode.info");
		window.open("https://keycode.info","_blank");
		break;
		case 77:
		if(code2==71){
			localStorage.setItem("lastvisited","https://www.gmail.com");
			window.open("https://www.gmail.com","_blank");
		}
		break;
		case 83:
		localStorage.setItem("lastvisited","https://www.stan.com.au");
		window.open("https://www.stan.com.au","_blank");
		break;
		case 89:
		localStorage.setItem("lastvisited","https://www.youtube.com");
		window.open("https://www.youtube.com","_blank");
		break;
		case 8:
			window.open(localStorage.getItem("lastvisited"),"_blank");
		break;
	}
	code2=code1;
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
var code2="";