var userAge = Number(prompt("please enter your age...", 18))
var userSex = prompt('please enter your sex (male, female)','male')

if (userAge < 18 || userSex === 'female') {
    alert("شما مجاز به ورود به سایت نیستید :(")
}
else{
    alert(" شما میتوانید به پنل خود وارد شوید :) ")
}