var subject=[];
var score=[];
var grade=[];
var average=0;
function runsubjects(){
	var subjects=parseInt(prompt("How many subjects are you taking?"));
	for(i=0;i<subjects;i++){
		subject[i]=prompt("Enter subject "+(i+1));
		score[i]=parseInt(prompt("Enter score for "+subject[i]));
		if(score[i]>=85){
			grade[i]="A";
		}
		else if(score[i]>=70 && score[i]<85){
			grade[i]="B";
		}
		else if(score[i]>=55 && score[i]<70){
			grade[i]="C";
		}
		else if(score[i]>=40 && score[i]<55){
			grade[i]="D";
		}
		else{
			grade[i]="FAIL";
		}
	}
	for(i=0;i<subjects;i++){
		document.getElementById("results").innerHTML+="<br/>"+("Subject: "+subject[i]+"  Score: "+score[i]+"  Grade: "+grade[i]);
	}
	for(i=0;i<subjects;i++){
		average=average+(score[i]/subjects);
	}
	document.getElementById("results").innerHTML+="<br/>"+("Your overall average was: "+average);
}