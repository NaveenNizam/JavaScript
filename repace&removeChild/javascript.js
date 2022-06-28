var list = document.createElement("li")
var text = document.createTextNode("Living Things")
list.appendChild(text)
var target = document.querySelector("#main");
var old = target.children[0];

target.replaceChild(list,old)

//var can = target.children[4]
target.removeChild(target.children[4])