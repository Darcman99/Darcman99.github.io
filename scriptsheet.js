function bookmarks(){
	clearTimeout(removefade,30000);
	content.classList.add("fade");
	content.src="bookmarks.html";
	content.style.display="block";
	setTimeout(removefade,30000);
}
function date(){
	var date=new Date();
	var day=date.getDate();
	if(day==1||day==21||day==31){
		suffix="st";
	}
	else if(day==2||day==22){
		suffix="nd";
	}
	else if(day==3||day==23){
		suffix="rd";
	}
	else{
		suffix="th";
	}
	var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
	document.getElementById("date").innerHTML=months[date.getMonth()]+"&nbsp;"+day+suffix+",&nbsp;"+date.getFullYear();
}
function delay(){
	setTimeout(time,1);
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
var content=document.getElementById("content")