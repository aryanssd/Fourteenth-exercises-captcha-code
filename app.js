function userNumber() {
    var firstNumber = Number(prompt("please enter first number..."))
    var secondNumber = Number(prompt("please enter second number..."))
    var thirdNumber = Number(prompt("please enter third number..."))
    var allNumber = firstNumber + secondNumber + thirdNumber
    var numberAvg = allNumber / 3
    alert("the average of your number is = " + numberAvg)
}

userNumber()f