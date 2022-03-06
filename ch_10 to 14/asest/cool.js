
// var x = 'cool'
// if (x=='cool')
// {
//     alert ('Thank you!')
// }
// var y = prompt ('are you there?','')
// if (y== 'navi'){ 
//     alert ('cool')
// }
// else {
//     alert ('rude')
// }

var score = 0;

var a = prompt ('Are you Master?');
if (a=='yes') {
    score ++;
    
}

var b = prompt ('Are you girl?');
if (b=='yes') {
    score ++;
}
else {
    score -=2;
}

var c = prompt ('Are you real?');
if (c=='yes') {
    score ++;
}
else {
    score -=2;
}
var d = prompt ('Are you ok?');
if (d=='yes') {
    score ++;
}
else {
    score -=2;
}
alert ('your score is :' + '' + score);


var score = 0
var q1 = prompt ('Qualification')
if (q1 === 'masters') {
    score =  score -2
}
else {
    score = score-1
}
if (q1 === 'intermediate') {
    score =  score -2
}
else {
    score = score-1
}
var q2 = prompt ('which lang you used')
if (q2 === 'js'){
    score++;
}
else {
    if (q2 === 'python'){
        score = score +3;
    }
    else {
        score= score-2;
    }
}
alert (score)
