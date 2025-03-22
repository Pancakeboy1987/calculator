let oneBtn = document.getElementById("one")
let twoBtn = document.getElementById("two")
let threeBtn = document.getElementById("three")
let fourBtn = document.getElementById("four")
let fiveBtn = document.getElementById("five")
let sixBtn = document.getElementById("six")
let sevenBtn = document.getElementById("seven")
let eightBtn = document.getElementById("eight")
let nineBtn = document.getElementById("nine")
let zeroBtn = document.getElementById("zero")
let plusBtn = document.getElementById("plus")
let miusBtn = document.getElementById("minus")
let mulBtn = document.getElementById("mul")
let divBtn = document.getElementById("divide")
let scbBtn = document.getElementById("scn")
let equalBtn = document.getElementById("equal")

let displayText=document.getElementById("display-text")


function render(n){
    displayText.innerHTML+= n;
}

//через onclick передается параметр сюда
function number(x){
    n = x;
    render(n)
}

function del(){
    displayText.innerHTML=''
}

async function to_plus(x,y){
    x = displayText.innerHTML;
    displayText.innerHTML = '';
}

function solution(num){
    
}