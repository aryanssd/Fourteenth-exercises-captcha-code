var userMinutes = Number(prompt("please enter minutes and get the hour...","more than 60"))

var userMinutesResult = userMinutes / 60

if(userMinutes < 60) {
    alert("ERROR: \n it can not Conversion to hour")
}else{
    alert(userMinutesResult)
}


