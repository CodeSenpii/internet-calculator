//jshint esversion:6

var d = document.querySelectorAll('.grid-item');
var s = document.querySelector('h1.result');
var v1;
var v2;
var result = 0.0;
var op;

console.log(s);

for(var x = 0; x < 13; x++){
  d[x].addEventListener("click", myFunction);
}

function offOperation(){

  d[3].removeEventListener("click", myFunction);
  d[7].removeEventListener("click", myFunction);
  d[11].removeEventListener("click", myFunction);

  makeOpaque();
}

function onOperation(){

  d[3].addEventListener("click", myFunction);
  d[7].addEventListener("click", myFunction);
  d[11].addEventListener("click", myFunction);

  removeOpaque();
}

function makeOpaque(){
  d[3].style.opacity = 0.5;
  d[7].style.opacity = 0.5;
  d[11].style.opacity = 0.5;
}

function removeOpaque(){
  d[3].style.opacity = 1;
  d[7].style.opacity = 1;
  d[11].style.opacity = 1;
}



function myFunction(){

  if(Number.isInteger(Number(this.innerText)) && op == null){
    s.innerText = this.innerText;
    v1 = Number(this.innerText);
    onOperation();
  }

  if(Number.isInteger(v1) && op!= null){
    s.innerText = this.innerText;
    v2 = Number(this.innerText);
    offOperation();
    calculate(v1, v2, op);
  }

  if(this.innerText === '+'){
    op = add;
  }else if(this.innerText === '-'){
    op = minus;
  }else if(this.innerText === '/'){
    op = divide;
  }
}



function add(value1, value2){
  return value1 + value2;
}
function minus(value1, value2){
  return value1 - value2;
}
function divide(value1, value2){
  return parseFloat(value1 / value2);
}

function calculate(value1, value2, operation){
  var x = operation(value1, value2);
  s.innerText = '=> '+ x;
}

offOperation();
