let weight = 73;
let height = 1.7272 * 1.7272;
let BMI = weight / height;
if (BMI < 18.5){
    console.log ('you are underweight')
}
else if (BMI >= 18.5 && BMI <= 24.9){
    console.log ('you are normal')
}
else if (BMI >= 25 && BMI <= 29.9){
    console.log ('you are over weight')
}
else{
    console.log ('you are obese')
}