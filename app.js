var userName = String(prompt("Enter Your UserName :", "At least 3 character please"))
var userPassword = prompt("Enter Your Password :", "At least 8 character please")

if (userName.length <= 3 || userPassword.length <= 8){
    alert("UserName must be at least 3 characters and Password must be at least 8 characters !!")
}
else if (isNaN(userPassword)){
    alert("Password : \nEnter a valid password!!")
}
else{
    alert("Your Password and your UserName are true, welcome :)")
}