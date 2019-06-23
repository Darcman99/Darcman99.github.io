const ordinalSuffix=["st","nd","rd"];
const addSuffix=n=>n+(ordinalSuffix[(n-1)%10]||"th");
const numberToOrdinal=n=>"${n}".match(/1\d$/)?n+"th":addSuffix(n);
function addbookmark(){
	var title=prompt("Title: ","Google");
	var url=prompt("URL: ","https://www."+title.toLowerCase()+".com");
	if(title!=null||url!=null){
		document.getElementById("footer").innerHTML+='<a id="'+title+'" href="'+url+`">`+title+"</a>";
	}
	document.getElementById("addbookmark").blur();
}
function date(){
	var date=new Date();
	var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
	document.getElementById("date").innerHTML=months[date.getMonth()]+"&nbsp;"+numberToOrdinal(date.getDate())+",&nbsp;"+date.getFullYear();
}
function keypress(event){
	var code1=event.keyCode;
	switch(code1){
		case 32:
		document.getElementById("addbookmark").classList.toggle("hidebutton");
		document.getElementById("footer").classList.toggle("hidefooter");
		document.getElementById("percentage").classList.toggle("hidepercentage");
		document.getElementById("removebookmark").classList.toggle("hidebutton");
		break;
		case 65:
		switch(code2){
			case 78:
			localStorage.setItem("lastvisited","https://www.nab.com");
			window.open("https://www.nab.com","_blank");
			break;
		}
		break;
		case 67:
		switch(code2){
			case 65:
			break;
			default:
			localStorage.setItem("lastvisited","https://codepen.io");
			window.open("https://codepen.io","_blank");
			break;
		}
		break;
		case 69:
		switch(code2){
			case 78:
			localStorage.setItem("lastvisited","https://www.netflix.com/au");
			window.open("https://www.netflix.com/au","_blank");
			break;
		}
		break;
		case 70:
		localStorage.setItem("lastvisited","https://www.facebook.com");
		window.open("https://www.facebook.com","_blank");
		break;
		case 73:
		switch(code2){
			case 71:
			localStorage.setItem("lastvisited","https://github.com");
			window.open("https://github.com","_blank");
			break;
		}
		break;
		case 75:
		localStorage.setItem("lastvisited","https://keycode.info");
		window.open("https://keycode.info","_blank");
		break;
		case 77:
		switch(code2){
			case 71:
			localStorage.setItem("lastvisited","https://www.gmail.com");
			window.open("https://www.gmail.com","_blank");
			break;
		}
		break
		case 83:
		localStorage.setItem("lastvisited","https://store.steampowered.com");
		window.open("https://store.steampowered.com","_blank");
		break;
		case 84:
		localStorage.setItem("lastvisited","https://trello.com");
		window.open("https://trello.com","_blank");
		break;
		break;
		case 89:
		localStorage.setItem("lastvisited","https://www.youtube.com");
		window.open("https://www.youtube.com","_blank");
		break;
		case 8:
			window.open(localStorage.getItem("lastvisited"),"_blank");
		break;
	}
	code4=code3;
	code3=code2;
	code2=code1;
}
function removebookmark(){
	var title=prompt("Title: ","Google");
	if(title!=null){
		document.getElementById(title).remove();
	}
	document.getElementById("removebookmark").blur();
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
		document.getElementById("percentage").innerHTML=(Math.round(battery.level*100))+"%";
	}
	)
	document.getElementById("charge").style.width=(battery.level*100)+"vw";
	document.getElementById("percentage").innerHTML=(Math.round(battery.level*100))+"%";
	bat=battery;
}
)
setInterval(time,1000);
time();
var bat="";
var code2="";
var code3="";