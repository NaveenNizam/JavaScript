document.querySelector("#main").classList.add("abc","xyz","qwe");

document.querySelector("#main").classList.remove("xyz");

var a = document.querySelector("#main").classList.length;
document.write("classList Length  ", a);

document.querySelector("#main").addEventListener("click",function() { 
    document.querySelector("#main").classList.toggle("gh");
})

var b = document.querySelector("#main").classList.item(2);
document.write("<br>",b)

var c = document.querySelector("#main").classList.contains("gh");
document.write("<br>",c)