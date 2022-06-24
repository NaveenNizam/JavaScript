

b = [1,2,3,4,5,6];
document.write ("The set of array is  "+ "[" +b + "]" ) 
b.shift()
document.write("<br>")
document.write("shift() function in array  to remove first element "+ "[" +b + "]" )
b.unshift(90,30)
document.write("<br>")
document.write("unshift(num) function in array to add first element "+ "[" +b + "]" )
b.pop()
document.write("<br>")
document.write("pop() function in array to remove last element  "+ "[" +b + "]" )
b.push(36)
document.write("<br>")
document.write("push(num) function in array to add lastt element  "+ "[" +b + "]" )
document.write("<br> <br>")
b.sort()

document.write ("sort() set of array is  "+ "[" +b + "]" ) 
document.write("<br>")
b.reverse()
document.write ("reverse() set of array is  "+ "[" +b + "]" ) 
document.write("<br> <br>")

var b = [4,7,8,99,33,101,4]
document.write ("...The set of array is  "+ "[" +b + "]" + "<br>") 

b.splice(1,0,5)
document.write("splice(Position,remove,newValue add in position) sub array  " +  "[" + b + "]")
document.write("<br> <br>")

var a = b.slice(1,5)
document.write("slice(startIndex,endIndex) sub array  " +  "[" + a + "]")
document.write("<br> <br>")

document.write ("...The set of array is  "+ "[" +b + "]" ) 
document.write("<br>")
var d = b.indexOf(36,1)
document.write("indexOf(search, startIndex)  " +  "[" +d + "]")
document.write("<br> <br>")
var e = b.lastIndexOf(3,-2) 
document.write("lastIndexOf(search, startIndex in opposite direction)  " +  "[" + e + "]")
document.write("<br>")
var f = Array.isArray(b)
document.write ("Array.isArray(var) to check is in array or not   " + "[" + f + "]")
document.write("<br> <br>")
var g = b.includes(34)
document.write ("includes(num) to check is in array or not   " + "[" + g+ "]")
document.write("<br> <br>")
var z = [900,800]
document.write("The set of b = "+ b + "     and the set of z = " + z)
document.write("<br>")

var h =b.concat(300,700,z)
document.write("b.concat(z) to concat  " + h)
console.log(h)
document.write("<br> <br>")
 var i =b.join("--")
document.write(" join (' ') to makes a string  " +i)
console.log("join function makes string  "+i)
document.write("<br> <br>")

document.write("...The set of array is  "+ "[" +b + "]")
document.write("<br> <br>")

var j = b.some(sign)
document.write("some(function) to check whether some value pass the test "+ "[" + j + "]")

document.write("<br> <br>")
var k = b.every(sign)
document.write("every(function) to check whether every value pass the test "+ "[" + k + "]")
document.write("<br> <br>")

var l = b.find(sign)
document.write("find(function) return first value if pass the test "+ "[" + l + "]")
document.write("<br> <br>")

var m = b.findIndex(sign)
document.write("findIndex(function) return first value index if pass the test "+ "[" + m + "]")
document.write("<br> <br>")

var n =  b.filter(sign)
document.write("filter(function) to return all value which are pass the test "+ "[" + n + "]")
document.write("<br> <br>")

document.write (" ... The set of array is  "+ "[" +b + "]" ) 
document.write("<br> <br>")
var p = b.map(cal)
document.write("map(function) make new array to perform a function "+ "[" + p + "]")
document.write("<br> <br>")


document.write (" ... The set of array is  "+ "[" +b + "]" ) 
document.write("<br> <br>")

function cal(calculate){
    return calculate * 2;
}

function sign(age){
    return age >= 18
}

b.forEach(value => {
    document.write("forEach(function) run for every value  " + value + 3 + " <br>")    
});

// b.forEach(function(value){ 
//     document.write(value + " <br>")    
// });
document.write("<br> <br>")

document.write (" ... The set of array is  "+ "[" +b + "]" ) 
document.write("<br> <br>")
var q=b.toString()
document.write (" toString() The set of array makes string  "+ "[" + q + "]" ) 
document.write("<br> <br>")
console.log("toString function makes string  "+q)
var o = b.fill(4)
document.write("fill(function) to fill all the values which user given "+ "[" + o + "]")

