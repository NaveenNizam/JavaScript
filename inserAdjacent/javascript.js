var nEw = document.querySelector(".con");
var target = "good"

nEw.insertAdjacentText("afterbegin",target);

var re = " <h2>insertAdjacentHTML</h2>";
nEw.insertAdjacentHTML("afterend",re);

// var te = "<h1></h1>"
// nEw.insertAdjacentElement("beforebegin",te)

var com = document.createComment("insertAdjacentElement is not visible");
console.log(com);
//nEw.appendChild(com)
nEw.insertBefore(com,nEw.childNodes[1]);