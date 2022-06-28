var main = document.querySelector(".main").children[5]
var target = main.cloneNode()  // by default it's value is false
console.log(target)
var lo = main.cloneNode(true)
console.log(lo)

document.querySelector(".main2").appendChild(lo)
