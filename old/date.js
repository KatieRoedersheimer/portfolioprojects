function myDate() {
var date = new Date();
var ampm;
var hour =  date.getHours();
var minutes = date.getMinutes();
var month = date.getMonth();
var fullMonth = ["January", "February", "March", "April"];
month = fullMonth[month];
var day = date.getDate();
var year = date.getFullYear();
if(hour>12){
hour=hour-12;
ampm = "PM"
}else{
	ampm ="AM"
}
if(minutes < 10){
	minutes = "0" + minutes
}
document.getElementById("date").innerHTML = hour +":" + minutes + ":" + ampm + " " + month + " " + day + " " + year;
}