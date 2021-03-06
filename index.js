//jshint esversion:6

var d = document.querySelectorAll('.grid-item');
var s = document.querySelector('h1.result');
var v1;
var v2;
var result = 0.0;
var op;


for(var x = 0; x < 16; x++){
  d[x].addEventListener("click", myFunction);
}

function hoverEvent(){
  d[3].addEventListener("mouseover", mouseOver);
  d[7].addEventListener("mouseover", mouseOver);
  d[11].addEventListener("mouseover", mouseOver);
  d[15].addEventListener("mouseover", mouseOver);
}

function offOperation(){

  d[3].removeEventListener("click", myFunction);
  d[7].removeEventListener("click", myFunction);
  d[11].removeEventListener("click", myFunction);
  d[15].removeEventListener("click", myFunction);

  makeOpaque();
}

function onOperation(){

  d[3].addEventListener("click", myFunction);
  d[7].addEventListener("click", myFunction);
  d[11].addEventListener("click", myFunction);
  d[15].addEventListener("click", myFunction);

  removeOpaque();
}

function makeOpaque(){
  // d[3].style.opacity = 0.5;
  // d[7].style.opacity = 0.5;
  // d[11].style.opacity = 0.5;
  // d[15].style.opacity = 0.5;
}

function removeOpaque(){
  d[3].style.opacity = 1;
  d[7].style.opacity = 1;
  d[11].style.opacity = 1;
  d[15].style.opacity = 1;
}

function mouseOver(){

  if (this.innerText === '+'){
    d[3].style.opacity = 0.5;
    d[7].style.opacity = 1;
    d[11].style.opacity = 1;
    d[15].style.opacity = 1;

  }else if(this.innerText === '-'){
    d[3].style.opacity = 1;
    d[7].style.opacity = 0.5;
    d[11].style.opacity = 1;
    d[15].style.opacity = 1;

  }else if(this.innerText === '/'){
    d[3].style.opacity = 1;
    d[7].style.opacity = 1;
    d[11].style.opacity = 0.5;
    d[15].style.opacity = 1;

  }else if(this.innerText === 'x'){
    d[3].style.opacity = 1;
    d[7].style.opacity = 1;
    d[11].style.opacity = 1;
    d[15].style.opacity = 0.5;
  }
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
  else if(this.innerText === 'x'){
    console.log(this);
    op = multiply;
  }else if(this.innerText === 'CE'){
    location.reload();
  }

  // if(this.innerText === '='){
  //   calculate(v1, v2, op);
  //   console.log(this.innerText);
  // }
}

function add(value1, value2){
  return value1 + value2;
}
function minus(value1, value2){
  return parseFloat(value1 - value2);
}
function divide(value1, value2){
  return parseFloat(value1 / value2);
}
function multiply(value1, value2){
  return value1 * value2;
}

function calculate(value1, value2, operation){
  console.log(value1, value2);
  var x = operation(value1, value2);
  s.innerText = '=> '+ x;
}

offOperation();
hoverEvent();
