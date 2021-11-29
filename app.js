function userNumber() {
    var inputNumber = Number(prompt("please enter your number..."))
    var inputNumberAvg = inputNumber % 2 
    inputNumberAvg === 0 ? alert(" your number is even = " + inputNumber) : alert(" your number is odd = "+ inputNumber)
}

userNumber()