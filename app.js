var userName = String(prompt("please enter your user name ...", "At least 3 character please"))
var userPassword = prompt("please enter you password ...", "At least 8 character please")

if (userName.length <= 3 && userPassword.length <= 8){
    alert("please enter more than 8 character for password")
    alert("please enter more than 3 character for username")
}else if (isNaN(userPassword)){
    alert("password : \nplease enter a valid password ")
}else{
    alert("your password and your user name are right you can enter, welcome :)")
}