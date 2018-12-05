const ordinalSuffix=["st","nd","rd"];
const addSuffix=n=>n+(ordinalSuffix[(n-1)%10]||"th");
const numberToOrdinal=n=>"${n}".match(/1\d$/)?n+"th":addSuffix(n);
function bookmarks(){
	clearTimeout(removefade,30000);
	content.classList.add("fade");
	content.src="bookmarks.html";
	content.style.display="block";
	contentparent.classList.add("backgroundfade");
	main.classList.add("main");
	setTimeout(removefade,30000);
}
function date(){
	var date=new Date();
	var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
	document.getElementById("date").innerHTML=months[date.getMonth()]+"&nbsp;"+numberToOrdinal(date.getDate())+",&nbsp;"+date.getFullYear();
}
function refresh(){
	location.reload();
}
function removefade(){
	content.classList.remove("fade");
	content.src="";
	contentparent.classList.remove("backgroundfade");
	main.classList.remove("main");
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
var contentparent=document.getElementById("contentparent")
var main=document.getElementById("main")