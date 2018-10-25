function bookmarks(){
	clearTimeout(removefade,10000);
	document.getElementById("content").style.display="block";
	document.getElementById("content").src="bookmarks.html";
	document.getElementById("content").classList.add("fade");
	setTimeout(removefade,10000);
}
function contact(){
	clearTimeout(removefade,10000);
	document.getElementById("content").style.display="block";
	document.getElementById("content").src="contact.html";
	document.getElementById("content").classList.add("fade");
	setTimeout(removefade,10000);
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
function downloads(){
	document.getElementById("content").style.display="block";
	document.getElementById("content").src="downloads.html";
	document.getElementById("content").classList.add("fade");
	setTimeout(removefade,10000);
}
function removefade(){
	document.getElementById("content").classList.remove("fade");
	document.getElementById("content").src="";
}
function search(){
	var input,filter,ul,li,a,i;input=document.getElementById("bookmarkssearch");
	filter=input.value.toUpperCase();
	ul=document.getElementById("bookmark");
	li=ul.getElementsByTagName("li");
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
	var hours=time.getHours();
	var halfhours=hours;
	var minutes=time.getMinutes();
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
	document.getElementById("time").innerHTML=halfhours+":"+minutes;
	if(hours<12){
		document.getElementById("ampm").innerHTML="AM";
	}
	else{
		document.getElementById("ampm").innerHTML="PM";
	}
	date();
}
function timetable(){
	document.getElementById("content").style.display="block";
	document.getElementById("content").src="timetable.html";
	document.getElementById("content").classList.add("fade");
	setTimeout(removefade,10000);
}
navigator.getBattery().then(function(battery){
	document.getElementById("charge").style.width=(battery.level*100)+"vw";
	battery.addEventListener('levelchange',function(){
		document.getElementById("charge").style.width=(battery.level*100)+"vw";
	}
	)
}
)
setInterval(time,1000);