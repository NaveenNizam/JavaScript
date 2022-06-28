document.querySelector("h2").innerHTML= "DOM get method"
document.querySelector("h4").innerHTML = ` <li>innerHTML</li><li>innerText</li><li>getAttribute("  ")</li><li>getAttributeNode("  ").value</li><li>attributes</li>`

var p = `An essay is generally a short piece of writing outlining the writer's perspective or story. It is often considered synonymous with a story or a paper or an article. Essays can be formal as well as informal.`

document.querySelector(".abc").innerText = p;
var i = p.lastIndexOf("essay",17);
document.write("<br>"+ i);
var a = document.querySelector("#heal").getAttribute("class")
document.write("<br> getAttribute: "+a)
var b = document.querySelector("#heal").getAttributeNode("style").value
document.write("<br>  getAttributeNode: "+b)
var c = document.querySelector(".abc").attributes;
document.write("<br>  attributes: it is in console"+c)
console.log(c)





document.querySelector("#he").innerHTML= "DOM set method"
var z = `An essay is generally a short piece of writing outlining the writer's perspective or story. It is often considered synonymous with a story or a paper or an article. Essays can be formal as well as informal.`

document.querySelector(".abxy").innerText = z;
document.querySelector(".abxy").setAttribute("class","qwerty");
document.querySelector("#heal").attributes[2].value= "xkyz";
document.querySelector("#heal").removeAttribute("style")
