const ordinalSuffix=["st","nd","rd"];
const addSuffix=n=>n+(ordinalSuffix[(n-1)%10]||"th");
const numberToOrdinal=n=>"${n}".match(/1\d$/)?n+"th":addSuffix(n);
function bookmarks(){
	clearTimeout(removefade,30000);
	content.classList.add("fade");
	content.src="bookmarks.html";
	content.style.display="block";
	setTimeout(removefade,30000);
}
function date(){
	var date=new Date();
	var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
	document.getElementById("date").innerHTML=months[date.getMonth()]+"&nbsp;"+numberToOrdinal(date.getDate())+",&nbsp;"+date.getFullYear();
}
function loadschedule(){
	var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	var fulldate=new Date();
	var date=fulldate.getDate();
	var nextday=new Date();
	nextday.setDate(date+1);
	var nextday2=new Date();
	nextday2.setDate(date+2);
	var nextday3=new Date();
	nextday3.setDate(date+3);
	var nextday4=new Date();
	nextday4.setDate(date+4);
	var nextday5=new Date();
	nextday5.setDate(date+5);
	var nextday6=new Date();
	nextday6.setDate(date+6);
	document.getElementById("currentdate").innerHTML=numberToOrdinal(date);
	document.getElementById("currentday").innerHTML=days[fulldate.getDay()];
	document.getElementById("date2").innerHTML=numberToOrdinal(nextday.getDate());
	document.getElementById("date3").innerHTML=numberToOrdinal(nextday2.getDate());
	document.getElementById("date4").innerHTML=numberToOrdinal(nextday3.getDate());
	document.getElementById("date5").innerHTML=numberToOrdinal(nextday4.getDate());
	document.getElementById("date6").innerHTML=numberToOrdinal(nextday5.getDate());
	document.getElementById("date7").innerHTML=numberToOrdinal(nextday6.getDate());
	document.getElementById("day2").innerHTML=days[nextday.getDay()];
	document.getElementById("day3").innerHTML=days[nextday2.getDay()];
	document.getElementById("day4").innerHTML=days[nextday3.getDay()];
	document.getElementById("day5").innerHTML=days[nextday4.getDay()];
	document.getElementById("day6").innerHTML=days[nextday5.getDay()];
	document.getElementById("day7").innerHTML=days[nextday6.getDay()];
}
function refresh(){
	location.reload();
}
function removefade(){
	content.classList.remove("fade");
	content.src="";
}
function schedule(){
	clearTimeout(removefade,30000);
	content.classList.add("fade");
	content.src="schedule.html";
	content.style.display="block";
	setTimeout(removefade,30000);
}
function search(){
	var input,filter,ul,li,a,i;input=document.getElementById("bookmarkssearch");
	ul=document.getElementById("bookmark");
	li=ul.getElementsByTagName("li");
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
var content=document.getElementById("content")