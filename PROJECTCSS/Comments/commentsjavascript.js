document.getElementById("reviewForm").addEventListener("submit", formSubmitted);
function formSubmitted(){
	event.preventDefault();
	var managerName=document.getElementById("managerName").value;
	var managerEmail=document.getElementById("managerEmail").value;
	var employeeName=document.getElementById("employeeName").value;
	var employeeEmail=document.getElementById("employeeEmail").value;
	var reviewType=document.getElementById("reviewType").value;
	var overallEvaluation=document.getElementById("overallEvaluation").value;
	var achievements=document.getElementById("achievements").value;
	var improvements=document.getElementById("improvements").value;
	var goals=document.getElementById("goals").value;
	
	document.getElementById("reviewForm").innerHTML=reviewType+" review by "+managerName+" for "+employeeName +".<br><br>Overall evaluation: "+overallEvaluation+" expectations <br>Achievements this period: "+achievements+ "<br>Areas for improvement: "+improvements+"<br>Goals/Projects for next period: "+goals+" <br><br>Click below to send the above review to "+managerEmail+ " and " +employeeEmail +", or alternatively restart the review form<br>";
	var button1 = document.createElement("button");
	var button2 = document.createElement("button");
	button1.id = "reviewSubmitted";
	button2.id = "restartForm"
	button1.innerHTML = "Send Now";
	button2.innerHTML = "Restart Form";
	document.getElementById("newButtons").append(button1);
	document.getElementById("newButtons").append(button2);
	document.getElementById("reviewSubmitted").addEventListener("click", finalSubmission);
	document.getElementById("restartForm").addEventListener("click", formRestart);
}
function finalSubmission(){
	event.preventDefault();
	document.getElementById("reviewForm").innerHTML="Thank you. Your review will be sent to both parties shortly.";
	hide()
}
function formRestart(){
	window.location.reload()
	hide()
}

			
function hide(){
	document.getElementById("newButtons").style.visibility = "hidden";
}