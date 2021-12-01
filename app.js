var username = "aryan"
var password = 138466
var inputUserName = String(prompt("Enter user name :"))
var inputUserPass = Number(prompt("Enter password :"))

if (username === inputUserName && password === inputUserPass) {
    alert(" you have been logged in successfully")
}else {
    alert("enter the user name and password correctly!!!")
}