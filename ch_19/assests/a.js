// // var attendance =[];
// // var roll_no = document.querySelector("#timein") 
// // function time(){
// //     attendance.push(roll_no.value)  // get input value
// //     roll_no.value = ""   // to remove input
// //     console.log(attendance)  
// // }

// // var f = document.querySelector("#totalAttendance")
// // function checkAttendance(){
    
// //     f.innerHTML = " total attendence is" + " " + attendance.length
// //     //innerHTML also add tags
// //     //innertext just return text
// // }

// var attendance =["12","14"];
// var roll_no = document.querySelector("#timein") 
// function time(){
//     attendance.push(roll_no.value)  // get input value
//     roll_no.value = ""   // to remove input
//     console.log(attendance)  
// }

// function deleteAdd(){
//     console.log('delete', roll_no.value)
//     if (attendance[0] == roll_no.value) {
//         attendance.splice (0,1)
//         console.log(attendance)
//     }
//     else if (attendance[1] == roll_no.value) {
//         attendance.splice (1,1)
//         console.log(attendance)
//     }
//     else {
//         console.log("thisnumber is not exists")
//     }
// }

// var f = document.querySelector("#totalAttendance")
// function checkAttendance(){
    
//     f.innerHTML = " total attendence is" + " " + attendance.length
//     //innerHTML also add tags
//     //innertext just return text
// }


var attendance = []
var attendance_name = [10,12]

var  check = document.querySelector('#totalAttendance')
function checkAttendance() {
    
    check.innerHTML = "total attendance is   " + attendance.length

}

// var real = document.querySelector('#name')
// function time (event) {
//     attendance_name.push(real.value)
//     real.value =''
//     console.log ( attendance_name)
    
// }

var roll_no = document.querySelector ('#timein')
function time (event) {
    if (roll_no.value == ''){
        attendance.splice(roll_no.value,1)
    }
    else {
        attendance.push(roll_no.value)
    roll_no.value = ''
    checkAttendance()
    console.log ( attendance )
    }
}

function deelete() {
    var index =attendance.indexOf(roll_no.value)
    
    if (index !== -1) {
        attendance.splice(index,1)
        roll_no.value = ''
        checkAttendance()
        console.log(attendance)
    }
    else {
        alert('data not exist')

    }
    
}

function upDate(){
    var index = attendance.indexOf(roll_no.value)
    if (index !== -1) {
        udate = prompt ("Correct your attendance","Roll Number")
        attendance.splice(index,1,udate)
        roll_no.value = ''
        checkAttendance()
        console.log(attendance)
    }
    else {
        alert('data not exist')

    }

}






