var city = prompt ('enter City Name:');
var first = city.slice(0,1);
var capo= city.slice(1)
var first = first.toLocaleUpperCase();
var capo = capo.toLowerCase();

document.querySelector('h1').innerHTML=first + capo;

