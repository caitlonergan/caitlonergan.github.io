
function runsubjects(){
	var subjects=parseInt(prompt("How many subjects are you taking?"));
	for(i=0;i<subjects;i++){
		var subject=prompt("Enter subject "+(i+1));
		var score=parseInt(prompt("Enter score for "+subject));
		var grade;
		if(score>=85){
			grade="A";
		}
		else if(score>=70 && score<85){
			grade="B";
		}
		else if(score>=55 && score<70){
			grade="C";
		}
		else if(score>=40 && score<55){
			grade="D";
		}
		else{
			grade="FAIL";
		}
		document.getElementById("results").innerHTML+="<br/>Subject: "+subject;
		document.getElementById("results").innerHTML+="<br/>Score: "+score;
		document.getElementById("results").innerHTML+="<br/>Grade: "+grade+"<br/>";
	}
}