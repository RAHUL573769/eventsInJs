function makeRed(){
    document.body.style.backgroundColor='red';
}
function makeBlue(){
    document.body.style.backgroundColor='blue';
}

function makeBlack(){
    document.body.style.backgroundColor='black'; 
}


// evebt listener adding

const green=document.getElementById('a');
console.log(green);
green.onclick = function(){
    document.body.style.backgroundColor='green'; 
}
