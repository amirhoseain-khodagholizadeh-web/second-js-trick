// Calcute BMI

const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")
const weightValue = document.querySelector("#weight-val")
const heightValue = document.querySelector("#height-val")
const bmiNumber = document.querySelector("#result")
const bmiCategory = document.querySelector("#category")

addEven(inputHeight, heightValue)
addEven(inputWeight, weightValue)

function calcuteBmi(weight, height) {
    let result = weight / (height ** 2)
    return result
}

function addEven(input, value) {
    input.addEventListener("input", (e) => {
        console.log(input.id == "weight");
        let r = ""
        r = input.id == "weight" ? "kg" : "cm"
        value.innerHTML = e.target.value + r
        let bmiResult = Math.floor(calcuteBmi(inputWeight.value, (inputHeight.value) / 100) * 10) / 10;
        bmiNumber.innerHTML = bmiResult
        if (bmiResult <= 18.5) {
            bmiNumber.style.color = "yellow"
            bmiCategory.innerHTML = "Under weight"
        } else if (bmiResult > 18.5 && bmiResult <= 24.9) {
            bmiNumber.style.color = "green"
            bmiCategory.innerHTML = "Normal weight"
        } else if (bmiResult > 24.9 && bmiResult <= 29.9) {
            bmiNumber.style.color = "orange"
            bmiCategory.innerHTML = "Over weight"
        } else {
            bmiNumber.style.color = "red"
            bmiCategory.innerHTML = "Very fat"
        }
    })
}