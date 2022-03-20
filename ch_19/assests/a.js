// var attendance =[];
// var roll_no = document.querySelector("#timein") 
// function timein(){
//     attendance.push(roll_no.value)  // get input value
//     roll_no.value = ""   // to remove input
//     console.log(attendance)  
// }

// var f = document.querySelector("#totalAttendance")
// function checkAttendance(){
    
//     f.innerHTML = " total attendence is" + " " + attendance.length
//     //innerHTML also add tags
//     //innertext just return text
// }

var attendance =["12","14"];
var roll_no = document.querySelector("#timein") 
function timein(){
    attendance.push(roll_no.value)  // get input value
    roll_no.value = ""   // to remove input
    console.log(attendance)  
}

function deleteAdd(){
    console.log('delete', roll_no.value)
    if (attendance[0] == roll_no.value) {
        attendance.splice (0,1)
        console.log(attendance)
    }
    else if (attendance[1] == roll_no.value) {
        attendance.splice (1,1)
        console.log(attendance)
    }
    else {
        console.log("thisnumber is not exists")
    }
}

var f = document.querySelector("#totalAttendance")
function checkAttendance(){
    
    f.innerHTML = " total attendence is" + " " + attendance.length
    //innerHTML also add tags
    //innertext just return text
}


