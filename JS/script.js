// body
let body = document.querySelector("body");

// --------------------------------------------------------------------------------------------------------------
// navBar

let darkModeButton = document.querySelector(".darkModeButton");
let darkModeCircle = document.querySelector(".darkModeButton>p");
let darkModeImg = document.querySelector(".darkModeButton>p>img");


darkModeButton.addEventListener("click", () => {
    if(darkModeButton.getAttribute("name") == "regular"){
        darkModeButton.setAttribute("name" , "dark");
        darkModeCircle.setAttribute("style","margin: 0px 0px 0.5px 25px;");
        darkModeImg.setAttribute("src", "/Static/icons/lightbulb-regular.svg");
        body.setAttribute("id","body");
        darkModeButton.setAttribute("style", "background-color: var(--color-4);")
    }else{
        darkModeButton.setAttribute("name" , "regular");
        darkModeCircle.setAttribute("style","margin: 0px 25px 0.5px 0px;");
        darkModeImg.setAttribute("src", "/Static/icons/lightbulb-solid.svg");
        body.removeAttribute("id");
        darkModeButton.setAttribute("style", "background-color: var(--color-5);")
    }
});

// --------------------------------------------------------------------------------------------------------------
//Helpers
let displayArray = new Array(0);
let displayOperations = new Array(0);
let answersArray = new Array(0);
let numberString = "";
let prevOperation = "";




// --------------------------------------------------------------------------------------------------------------
// Hooks

//paras
let displayUpper = document.getElementsByClassName("displayUpper");
let displayBottom = document.getElementsByClassName("displayBottom");
let operationSymbol = document.getElementsByClassName("operationSymbol");

//digits
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");
let dot = document.getElementById("dot");

let digitsArray = new Array(0);
digitsArray.push(one);
digitsArray.push(two);
digitsArray.push(three);
digitsArray.push(four);
digitsArray.push(five);
digitsArray.push(six);
digitsArray.push(seven);
digitsArray.push(eight);
digitsArray.push(nine);
digitsArray.push(zero);
digitsArray.push(dot);

//operators
let add = document.getElementById("plusOperator");
let minus = document.getElementById("minusOperator");
let division = document.getElementById("divisionOperator");
let multiply = document.getElementById("multiplyOperator");
let mod = document.getElementById("modOperator");

//values
let openBracket = document.getElementById("openBracket");
let endBracket = document.getElementById("endBracket");
let ce = document.getElementById("ce");
let ae = document.getElementById("ae");
let upArrow = document.getElementById("upArrow");
let factorial = document.getElementById("factorial");
let pi = document.getElementById("pi");
let e = document.getElementById("e");
let equal = document.getElementById("equal");

//class
let digits = document.getElementsByClassName("digits");
let operation = document.getElementsByClassName("operation");



one.addEventListener("click", () => {
    numberString = numberString + "1";
    displayBottom[0].innerText = numberString;
});
two.addEventListener("click", () => {
    numberString = numberString + "2";
    displayBottom[0].innerText = numberString;
});
three.addEventListener("click", () => {
    numberString = numberString + "3";
    displayBottom[0].innerText = numberString;
});
four.addEventListener("click", () => {
    numberString = numberString + "4";
    displayBottom[0].innerText = numberString;
});
five.addEventListener("click", () => {
    numberString = numberString + "5";
    displayBottom[0].innerText = numberString;
});
six.addEventListener("click", () => {
    numberString = numberString + "6";
    displayBottom[0].innerText = numberString;
});
seven.addEventListener("click", () => {
    numberString = numberString + "7";
    displayBottom[0].innerText = numberString;
});
eight.addEventListener("click", () => {
    numberString = numberString + "8";
    displayBottom[0].innerText = numberString;
});
nine.addEventListener("click", () => {
    numberString = numberString + "9";
    displayBottom[0].innerText = numberString;
});
zero.addEventListener("click", () => {
    numberString = numberString + "0";
    displayBottom[0].innerText = numberString;
});
dot.addEventListener("click", () => {
    numberString = numberString + ".";
    displayBottom[0].innerText = numberString;
});
openBracket.addEventListener("click", () => {
    let answer;
    if(numberString === ""){
        answer = 0;
    }else{
        answer = Math.pow(parseFloat(numberString),3);
    }
    numberString = answer;
    displayBottom[0].innerText = numberString;
});
endBracket.addEventListener("click", () => {
    let answer;
    if(numberString === ""){
        answer = 0;
    }else{
        answer = Math.pow(parseFloat(numberString),0.5);
    }
    numberString = answer;
    displayBottom[0].innerText = numberString;
});
upArrow.addEventListener("click", () => {
    let answer;
    if(numberString === ""){
        answer = 0;
    }else{
        answer = Math.pow(parseFloat(numberString),2);
    }
    numberString = answer;
    displayBottom[0].innerText = numberString;
});
factorial.addEventListener("click", () => {
    let answer;
    if(numberString === ""){
        answer = 1;
    }else{
        answer = fact(parseFloat(numberString));
    }
    numberString = answer;
    displayBottom[0].innerText = numberString;
});
pi.addEventListener("click", () => {
    let answer;
    if(numberString === ""){
        answer = 3.14159265359;
    }else{
        answer = parseFloat(numberString) * 3.14159265359;
    }
    numberString = answer;
    displayBottom[0].innerText = numberString;
});
e.addEventListener("click", () => {
    let answer;
    if(numberString === ""){
        answer = 2.71828182846;
    }else{
        answer = parseFloat(numberString) * 2.71828182846;
    }
    numberString = answer;
    displayBottom[0].innerText = numberString;
});

add.addEventListener("click",() =>{
    displayBottom[0].innerText = "0";
    displayArray.push(numberString);
    if(answersArray.length === 0){
        answersArray.push(numberString);
    }else{
        if(prevOperation === "+"){
            answersArray.push(parseFloat(answersArray[answersArray.length-1]) + parseFloat(numberString));
        }else if(prevOperation === "-"){
            answersArray.push(parseFloat(answersArray[answersArray.length-1]) - parseFloat(numberString));
        }else if(prevOperation === "*"){
            answersArray.push(parseFloat(answersArray[answersArray.length-1]) * parseFloat(numberString));
        }else if(prevOperation === "/"){
            answersArray.push(parseFloat(answersArray[answersArray.length-1]) / parseFloat(numberString));
        }else if(prevOperation === "%"){
            answersArray.push(parseFloat(answersArray[answersArray.length-1]) % parseFloat(numberString));
        } 
    }
    numberString = "";
    prevOperation = "+";
    operationSymbol[0].innerText = prevOperation;
    displayUpper[0].innerText = answersArray[answersArray.length-1];
});
minus.addEventListener("click",() =>{
    displayBottom[0].innerText = "0";
    displayArray.push(numberString);
    if(answersArray.length === 0){
        answersArray.push(numberString);
    }else{
        if(prevOperation === "+"){
            answersArray.push(parseFloat(answersArray[answersArray.length-1]) + parseFloat(numberString));
        }else if(prevOperation === "-"){
            answersArray.push(parseFloat(answersArray[answersArray.length-1]) - parseFloat(numberString));
        }else if(prevOperation === "*"){
            answersArray.push(parseFloat(answersArray[answersArray.length-1]) * parseFloat(numberString));
        }else if(prevOperation === "/"){
            answersArray.push(parseFloat(answersArray[answersArray.length-1]) / parseFloat(numberString));
        }else if(prevOperation === "%"){
            answersArray.push(parseFloat(answersArray[answersArray.length-1]) % parseFloat(numberString));
        } 
    }
    numberString = "";
    prevOperation = "-";
    operationSymbol[0].innerText = prevOperation;
    displayUpper[0].innerText = answersArray[answersArray.length-1];
});
division.addEventListener("click",() =>{
    displayBottom[0].innerText = "0";
    displayArray.push(numberString);
    if(answersArray.length === 0){
        answersArray.push(numberString);
    }else{
        if(prevOperation === "+"){
            answersArray.push(parseFloat(answersArray[answersArray.length-1]) + parseFloat(numberString));
        }else if(prevOperation === "-"){
            answersArray.push(parseFloat(answersArray[answersArray.length-1]) - parseFloat(numberString));
        }else if(prevOperation === "*"){
            answersArray.push(parseFloat(answersArray[answersArray.length-1]) * parseFloat(numberString));
        }else if(prevOperation === "/"){
            answersArray.push(parseFloat(answersArray[answersArray.length-1]) / parseFloat(numberString));
        }else if(prevOperation === "%"){
            answersArray.push(parseFloat(answersArray[answersArray.length-1]) % parseFloat(numberString));
        } 
    }
    numberString = "";
    prevOperation = "/";
    operationSymbol[0].innerText = prevOperation;
    displayUpper[0].innerText = answersArray[answersArray.length-1];
});
multiply.addEventListener("click",() =>{
    displayBottom[0].innerText = "0";
    displayArray.push(numberString);
    if(answersArray.length === 0){
        answersArray.push(numberString);
    }else{
        if(prevOperation === "+"){
            answersArray.push(parseFloat(answersArray[answersArray.length-1]) + parseFloat(numberString));
        }else if(prevOperation === "-"){
            answersArray.push(parseFloat(answersArray[answersArray.length-1]) - parseFloat(numberString));
        }else if(prevOperation === "*"){
            answersArray.push(parseFloat(answersArray[answersArray.length-1]) * parseFloat(numberString));
        }else if(prevOperation === "/"){
            answersArray.push(parseFloat(answersArray[answersArray.length-1]) / parseFloat(numberString));
        }else if(prevOperation === "%"){
            answersArray.push(parseFloat(answersArray[answersArray.length-1]) % parseFloat(numberString));
        } 
    }
    numberString = "";
    prevOperation = "*";
    operationSymbol[0].innerText = prevOperation;
    displayUpper[0].innerText = answersArray[answersArray.length-1];
    
});
mod.addEventListener("click",() =>{
    displayBottom[0].innerText = "0";
    displayArray.push(numberString);
    if(answersArray.length === 0){
        answersArray.push(numberString);
    }else{
        if(prevOperation === "+"){
            answersArray.push(parseFloat(answersArray[answersArray.length-1]) + parseFloat(numberString));
        }else if(prevOperation === "-"){
            answersArray.push(parseFloat(answersArray[answersArray.length-1]) - parseFloat(numberString));
        }else if(prevOperation === "*"){
            answersArray.push(parseFloat(answersArray[answersArray.length-1]) * parseFloat(numberString));
        }else if(prevOperation === "/"){
            answersArray.push(parseFloat(answersArray[answersArray.length-1]) / parseFloat(numberString));
        }else if(prevOperation === "%"){
            answersArray.push(parseFloat(answersArray[answersArray.length-1]) % parseFloat(numberString));
        } 
    }
    numberString = "";
    prevOperation = "%";
    operationSymbol[0].innerText = prevOperation;
    displayUpper[0].innerText = answersArray[answersArray.length-1];
});

ae.addEventListener("click",() =>{
    while(displayArray.length != 0){
        displayArray.pop();
    }
    while(displayOperations.length != 0){
        displayOperations.pop();
    }
    numberString = "";
    displayBottom[0].innerText = "0";
    displayUpper[0].innerText = "0";
    operationSymbol[0].innerText = "";
});

ce.addEventListener("click",()=>{
     numberString = "";
    displayBottom[0].innerText = "0";
});


equal.addEventListener("click", () => {
    
    displayArray.push(numberString);
    if(answersArray.length === 0){
        answersArray.push(numberString);
    }else{
        if(prevOperation === "+"){
            answersArray.push(parseFloat(answersArray[answersArray.length-1]) + parseFloat(numberString));
        }else if(prevOperation === "-"){
            answersArray.push(parseFloat(answersArray[answersArray.length-1]) - parseFloat(numberString));
        }else if(prevOperation === "*"){
            answersArray.push(parseFloat(answersArray[answersArray.length-1]) * parseFloat(numberString));
        }else if(prevOperation === "/"){
            answersArray.push(parseFloat(answersArray[answersArray.length-1]) / parseFloat(numberString));
        }else if(prevOperation === "%"){
            answersArray.push(parseFloat(answersArray[answersArray.length-1]) % parseFloat(numberString));
        } 
    }
    operationSymbol[0].innerText = "";
    displayUpper[0].innerText = "";
    displayBottom[0].innerText = answersArray[answersArray.length-1];
});













// --------------------------------------------------------------------------------------------------------
// functions

function fact(a){
    let factAnswer = 1;
    for(let i=1; i<=a;i++){
        if(factAnswer > Number. MAX_VALUE){
            return Infinity;
        }
        factAnswer = factAnswer*i;
    }
    return factAnswer;
}