document.querySelector("h1").innerText = "Event Listener -> DoubleClick";

document.querySelector("h1").addEventListener("dblclick",abc);
function abc(){
    this.style.color = "red";
   
}
document.querySelector("h2").addEventListener("click",function(){
    alert("hi")
    document.querySelector(".abc").style.color = 'green';
    document.querySelector("#main").classList.toggle("xy")
    document.querySelector(".xy").style.color = 'purple';
})
document.querySelector(".outer").addEventListener("click",function(){
    alert("outer")
},true)
document.querySelector(".inner").addEventListener("click",function(){
    alert("inner")
})
