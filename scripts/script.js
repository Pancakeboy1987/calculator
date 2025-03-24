///кнопки
let oneBtn = document.getElementById("one");
let twoBtn = document.getElementById("two");
let threeBtn = document.getElementById("three");
let fourBtn = document.getElementById("four");
let fiveBtn = document.getElementById("five");
let sixBtn = document.getElementById("six");
let sevenBtn = document.getElementById("seven");
let eightBtn = document.getElementById("eight");
let nineBtn = document.getElementById("nine");
let zeroBtn = document.getElementById("zero");
let plusBtn = document.getElementById("plus");
let miusBtn = document.getElementById("minus");
let mulBtn = document.getElementById("mul");
let divBtn = document.getElementById("divide");
let scbBtn = document.getElementById("scn");
let equalBtn = document.getElementById("equal");

let displayText = document.getElementById("display-text");

///переменные
let operation = "";

let fstNumber;

function render(n) {
  displayText.innerHTML += n;
}

//через onclick передается параметр сюда
function number(x) {
  n = x;
  render(n);
}

//функция удаления
function del() {
  displayText.innerHTML = "";
}

function to_plus() {
  fstNumber = parseInt(displayText.innerHTML);
  displayText.innerHTML = "";
  operation = "+";
}

function to_minus() {
  fstNumber = parseInt(displayText.innerHTML);
  displayText.innerHTML = "";
  operation = "-";
}

function to_mul() {
  fstNumber = parseInt(displayText.innerHTML);
  displayText.innerHTML = "";
  operation = "*";
}

function to_div() {
  fstNumber = parseInt(displayText.innerHTML);
  displayText.innerHTML = "";
  operation = "/";
}

function solution() {
  const sndNumber = parseInt(displayText.innerHTML);
  switch (operation) {
    case "+":
      let answ1 = fstNumber + sndNumber;
      displayText.innerHTML = answ1;
      break;
    case "-":
      let answ2 = fstNumber - sndNumber;
      displayText.innerHTML = answ2;
      break;
    case "*":
      let answ3 = fstNumber * sndNumber;
      displayText.innerHTML = answ3;
      break;
    case "/":
      let answ4 = fstNumber / sndNumber;
      displayText.innerHTML = answ4;
    default:
      return;
  }
}
