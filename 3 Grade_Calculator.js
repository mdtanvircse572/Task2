/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
//input score
var score = 100;

//impliment grade calculator
if(score >= 90 && score <=100){
    console.log('Bro You got A Grade and congratulations broo')
}
else if(score >= 80 && score <= 89){
    console.log('Bro You got B Grade')
}
else if(score >= 70 && score <= 79){
    console.log('Bro You got C Grade')
}
else if(score >= 60 && score <= 69){
    console.log('Bro You got D Grade')
}
else{
    console.log('Bro You Got F Grade and Try Harder Broo');
    
}
