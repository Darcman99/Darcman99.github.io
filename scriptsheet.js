document.getElementById("footer").innerHTML=localStorage.getItem("bookmarks");
function addbookmark(){
	var title=prompt("Title: ","Google");
	var url=prompt("URL: ","https://www."+title.toLowerCase()+".com");
	if(title!=null||url!=null){
		document.getElementById("footer").innerHTML+='<a id="'+title+'" href="'+url+`">`+title+"</a>";
	}
	document.getElementById("addbookmark").blur();
	var list,i,switching,b,shouldSwitch;
	list=document.getElementById("footer");
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
	localStorage.setItem("bookmarks",document.getElementById("footer").innerHTML);
}
function date(){
	var date=new Date();
	var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
	document.getElementById("date").innerHTML=months[date.getMonth()]+"&nbsp;"+getNumberWithOrdinal(date.getDate())+",&nbsp;"+date.getFullYear();
}
function getNumberWithOrdinal(n){
	var s=["th","st","nd","rd"],
	v=n%100;
	return n+(s[(v-20)%10]||s[v]||s[0]);
}
function keypress(event){
	var code1=event.keyCode;
	switch(code1){
		case 32:
		document.getElementById("addbookmark").classList.toggle("hidebutton");
		document.getElementById("footer").classList.toggle("hidefooter");
		document.getElementById("percentage").classList.toggle("hidepercentage");
		document.getElementById("removebookmark").classList.toggle("hidebutton");
		document.getElementById("uploadbackgroundlabel").classList.toggle("hideupload");
		break;
		case 9:
		location.reload();
		break;
	}
}
function removebookmark(){
	var title=prompt("Title: ","Google");
	if(title!=null){
		document.getElementById(title).remove();
	}
	document.getElementById("removebookmark").blur();
	localStorage.setItem("bookmarks",document.getElementById("footer").innerHTML);
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