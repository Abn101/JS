function calculateBmi(weight, height) {
    let bmi = weight / (height * height);
    return bmi;
}
const checkBmi = (bmi) => {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        return "Overweight";
    } else {
        return "Obesity";
    }
}
let weight = 70;
let height = 1.75;

const bmi = calculateBmi(weight,height).toFixed(2);
const type = checkBmi(bmi);
console.log("Weight = ",weight);
console.log("Height = ",height);
console.log("your bmi = ",bmi);
console.log("you are : ",type);