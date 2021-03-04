'use strict';



/* Переменные
 var leftBorderWidth = 1;
let second = 2;
const pi = 3.14;

Вывод в консоль
console.log(second); */

/* console.log(4/0);

console.log(9 * 'china');

let persone = {
    name: 'Chingiz',
    age: 25,
    isMarried: true
};

console.log(persone['name']);


let arr = ['plum.png', 'orange.jpeg', 'apple.bmp'];

console.log(arr[0]);
 */
//alert('Hellow World!');

/* let answer = confirm('Are you here?');

console.log(answer); */

//let answer = +prompt('Есть ли вам 18?', 'Да');

/* console.log(typeof(answer));

console.log('arr' + '-object');
console.log(4 + + '-object'); */

/* let incr = 10,
    decr = 10;


console.log(incr++);
console.log(decr--);

console.log(5%2);
console.log('2' === 2);
console.log('5' == 5);

let isChecked = false,
    isClose = false;

console.log(isChecked || !isClose); */


//Домашнее задание:
/* let money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    a2 = prompt("Во сколько обойдется?", ''),
    a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    a4 = prompt("Во сколько обойдется?", '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget / 30); */

//Условия 119:
/*  if (2*4 ==8) {
    console.log('Верно!')
} else {
    console.log('Неверно')
}

let num = 50;

if (num<49) {
    console.log('Неверно!')
} else if (num > 100) {
    console.log('Много')
} else {
    console.log('Верно!')
};
//Тернарный оператор
(num == 50) ? console.log('Верно') : console.log('Неверно!'); 

switch (num) {
    case num < 49:
        console.log('Неверно!');
        break;
    case num > 100:
        console.log('Много');
        break;
    case num > 80:
        console.log('Много');
        break;
    case 50:
        console.log('Верно!');
        break;
    default:
        console.log('Что то пошло не так!');
        break;

} */
//Циклы
//1
/* let num = 50;
/* while (num < 55) {
    console.log(num);
    num++;
} */
//2
/* do {
    console.log(num);
    num++;
}
while(num < 55); */
//3
/* for(let i = 1; i < 8; i++) {
    if(i==6) {
        continue
    }
    console.log(i);
} */


//Функции
/* let num = 20;

function showFirstMessage(text) {
    alert(text);
    let num = 10;
    console.log(num);
}

showFirstMessage("Hello world");
console.log(num); */

//Возврат
//вариант 1
//function calc (a,b)

//Вариант 2
/* let calc = function (a,b) {
    return (a+b);
} */
//вариант 3... стрелочная функция
/* let calc = (a,b) => a+b

console.log(calc(3,4))

console.log(calc(5,6))

function retVar() {
    let num =50;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum);

let str = "Batman";
console.log(str.length);

console.log(str.toUpperCase())
console.log(str.toLowerCase())

let twelve = "12.2px";

//console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve)); */

