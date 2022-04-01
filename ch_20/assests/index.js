
var peel = 'Summer Flowers are one of the most incredible creations of God that are precious to nature. The beauty of blossoms is not only admired in nature but also considered as a token of love and a word of expressing the utmost emotion. It is believed that flowers are a better conveyer of many unspoken words. And it is the reason why blooms are vital parts of every special occasion from birthdays till the funeral. There is an enormous range of  Flower varieties available in the markets.'
document.getElementById('remo').innerHTML = peel;

var texto = peel.replace('Summer','Winter');
 document.getElementById('kemo').innerHTML = texto;


var flower = ["Rose", "SunFlower", "Lily", "Marigold", "Tulip", "Jasmine","Daffodils",'Bluebell'];

var cool = flower.slice(3,7);
// document.write(cool);

 let text = ""; // for summer
for ( i = 0; i < flower.length; i++) {
  text += flower[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;


let relax= "";  //for winter
for ( i = 0; i < cool.length; i++) {
    relax += cool[i] + "<br>";
}
document.getElementById("lemo").innerHTML = relax;

var good = "";
for ( i = 0; i < cool.length; i++) {
    if(cool.splice(0,1,'')){
        
    }
    if(cool.splice(1,1,'SadaBahar')){
    }
    if(cool.splice(2,1,'Cherry blossom')){
    }
    good+= cool[i] + "<br>";
}
document.getElementById("hemo").innerHTML = good;

 












        

