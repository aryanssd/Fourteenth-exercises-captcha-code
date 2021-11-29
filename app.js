var userGpa = Number(prompt("Please enter your Grade point average ...",12))

switch (userGpa) {
    case 18:
    case 19:
    case 20:
        alert("your level is = A")
        break;
    case 15:
    case 16:
    case 17:
        alert("your level is = B")   
        break; 
    case 12:
    case 13:
    case 14:
        alert("your level is = C")
    break; 
    default:
        alert("You became fired :(")
        break; 
}