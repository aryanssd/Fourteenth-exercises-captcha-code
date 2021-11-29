var number1 = Number(prompt("please enter the first number"))
var number2 = Number(prompt("please enter the second number"))


function showPower(num1, num2) {
    return num1 ** num2
}



var powerResult = showPower(number1, number2)

alert("powerResult = " + powerResult)