/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/
//input weight and hieght
var weight = 65; //in kilograms
var height = 1.75; //in meters

//calculate bmi
var bmi = weight / (height * height);
console.log('your bmi is',bmi.toFixed(2));

//determined health catagory based on bmi value using nested if-else value;
if(bmi < 18.5){
    console.log('You are Underweight.');
}
else if(bmi >= 18.5 && bmi<= 24.9){
    console.log('You are Normal.')
}
else if(bmi >= 25 && bmi<= 29.9){
    console.log('You are Overweight.')
}
else{
    console.log('You are Obese.')
}
