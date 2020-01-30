

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    'use strict';
// let a;
// let b;
// let c;      Что значит реализовать функцию? Такой же вопрос на 51 строке.
// d = b**2 - 4*a*c 
let resultofD = [];

Math.pow(b, 2);
let d = b - 4*a*c;
if ( d < 0) {
    resultofD = [];
} else if ( d > 0 ) {
    let x1, x2;
    Math.sqrt(d);
    x1 = ( (-b) + d )/(2*a);
    x2 = ( (b) + d )/(2*a);
    resultofD.push(x1 , x2);
    console.log(resultofD); 
} else if ( d = 0) {
    let x1;
    Math.sqrt(d);
    x1 = ( (-b) + d )/(2*a);
    resultofD.push(x1);
    console.log(resultofD);
}
// return x1, x2;
    // код для задачи №1 писать здесь
    //return x;
}

function calculateAverageRating() {
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    let intialMarks = [];
    let sum;
    intialMarks.push(marks)
    if ( intialMarks.length > 5) {
        intialMarks.slice(0, 5);
        console.log('Превышен лимит введенных оценок');
    } else if (intialMarks.length <=5) {
        for (let i; i < intialMarks; i++) {
      
        sum =+ intialMarks;
        }
        averageMark = sum/intialMarks.length;
        console.log(averageMark);
    }
    // код для задачи №2 писать здесь
    //return averageMark;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    //console.log(result)
    //return result;
}