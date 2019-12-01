var armyHours=-1;
var bat="";
var code2="";
var code3="";
document.getElementById("bookmarks").innerHTML=localStorage.getItem("bookmarks");
function addBookmark(){
	var title=prompt("Title: ","Google");
	var url=prompt("URL: ","https://www."+title.toLowerCase()+".com");
	if(title!=null||url!=null){
		document.getElementById("bookmarks").innerHTML+='<a id="'+title+'" href="'+url+`">`+title+"</a>";
	}
	document.getElementById("addBookmark").blur();
	var list,i,switching,b,shouldSwitch;
	list=document.getElementById("bookmarks");
	switching=true;
	while(switching){
		switching=false;
		b=list.getElementsByTagName("a");
		for(i=0;i<(b.length-1);i++){
			shouldSwitch=false;
			if(b[i].innerHTML.toLowerCase()>b[i+1].innerHTML.toLowerCase()){
				shouldSwitch=true;
				break;
			}
		}
		if(shouldSwitch){
			b[i].parentNode.insertBefore(b[i+1],b[i]);
			switching=true;
		}
	}
	localStorage.setItem("bookmarks",document.getElementById("bookmarks").innerHTML);
}
function armyTime(){
	armyHours=armyHours*-1;
	time();
}
function getNumberWithOrdinal(n){
	var s=["th","st","nd","rd"],
	v=n%100;
	return n+(s[(v-20)%10]||s[v]||s[0]);
}
function keyPress(event){
	var code1=event.keyCode;
	switch(code1){
		case 32:
		document.getElementById("addBookmark").classList.toggle("hideButton");
		document.getElementById("bookmarks").classList.toggle("hideBookmarks");
		document.getElementById("percentage").classList.toggle("hidePercentage");
		document.getElementById("removeBookmark").classList.toggle("hideButton");
		break;
		case 9:
		location.reload();
		break;
	}
}
function removeBookmark(){
	var title=prompt("Title: ","Google");
	if(title!=null){
		document.getElementById(title).remove();
	}
	document.getElementById("removeBookmark").blur();
	localStorage.setItem("bookmarks",document.getElementById("bookmarks").innerHTML);
}
function time(){
	var time=new Date();
	var minutes=time.getMinutes();
	var hours=time.getHours();
	var halfHours=hours;
	var date=new Date();
	var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
	document.getElementById("date").innerHTML=months[date.getMonth()]+"&nbsp;"+getNumberWithOrdinal(date.getDate())+",&nbsp;"+date.getFullYear();
	if(armyHours<0){
		if(halfHours>12){
			halfHours=hours-12;
		}
		else if(hours===0){
			halfHours=12;
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
		document.getElementById("time").innerHTML=halfHours+":"+minutes;
	}
	else{
		if(minutes<10){
			minutes="0"+minutes;
		}
		else{
			minutes=minutes;
		}
		document.getElementById("ampm").innerHTML="";
		document.getElementById("time").innerHTML=hours+":"+minutes;
	}
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