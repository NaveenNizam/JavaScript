document.querySelector("#can").style.fontSize = "30px"
var ele = document.createElement("h1");
console.log(ele)

var ment = document.createTextNode("It is appear by AppendChild");
console.log(ment)

ele.appendChild(ment)

document.querySelector("#can").appendChild(ele)


var h = document.createElement("h4");
console.log(h)
var text = document.createTextNode("It is appear by insertBefore");
console.log(text)
h.appendChild(text)
console.log(h)

var a = document.querySelector("h1");
document.querySelector("h1").insertBefore(h,a.childNodes[1])

var com = document.createComment("this is comment")
console.log(com)
document.querySelector(".ok").appendChild(com)