let sub= document.getElementById('sub');
let force= document.getElementById('f');
let mass= document.getElementById('m');
let accel= document.getElementById('a');
let art= document.getElementById('art');
let ans;
function calc() {
    if (force.value=="") {
        art.innerHTML=mass.value*accel.value;
    }
    else if (mass.value=="") {
        art.innerHTML=force.value/accel.value;
    }
    else if (accel.value=="") {
        art.innerHTML=force.value/mass.value;
    } else {
        alert('invalid input');  
    }
}