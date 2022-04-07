
var city= prompt("Enter City Name:"," ");

var sity = city.toUpperCase();
document.querySelector('h1').innerHTML=sity;

city = city.toLowerCase();
document.querySelector('h2').innerHTML=city;


var rity = city.toLocaleLowerCase();
document.querySelector('h3').innerHTML=rity;

var shitty = city.toLocaleUpperCase();
document.querySelector('h4').innerHTML=shitty;