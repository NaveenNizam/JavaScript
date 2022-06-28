var a = document.querySelector("#inner").parentElement
console.log(a)
document.querySelector("#inner").parentElement.style.color="red"
var b = document.querySelector("#inner").parentNode
console.log(b)
var c = document.querySelector("#outer").children;
console.log(c)
var d = document.querySelector("#outer").children[0];
console.log(d)
var e = document.querySelector("#outer").childNodes;
console.log(e)
var f = document.querySelector("#outer").firstChild;
console.log("it can't be style in first chlid",f)
var g = document.querySelector("#outer").lastChild;
console.log(g)
var i = document.querySelector("#outer").firstElementChild;
console.log(i)
var h = document.querySelector("#inner").lastElementChild;
console.log("it can't be style in last chlid",h)
var j = document.querySelector("#outer").nextElementSibling;
console.log(j)
var k = document.querySelector("#outer").previousElementSibling;
console.log(k)
var l = document.querySelector("#outer").nextSibling;
console.log(l)
var m = document.querySelector("#outer").previousSibling;
console.log(m)
var n = document.querySelector("#outer").parentElement;
console.log(n)


document.querySelector("#outer").parentElement.style.fontSize = "80px"

document.querySelector("#inner").parentElement.style.fontSize = "50px"

document.querySelector("#outer").firstElementChild.style.fontSize = "30px"
document.querySelector("#inner").lastElementChild.style.textDecoration  = "underline"
document.querySelector("#inner").lastElementChild.style.textDecorationColor  = "black"

document.querySelector("#outer").parentElement.style.color= "blue"
document.querySelector("#d").nextElementSibling.style.color= "blue"
document.querySelector("#d").previousElementSibling.style.color= "green"