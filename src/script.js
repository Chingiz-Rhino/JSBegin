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

let money = prompt("Ваш бюджет на месяц?"),
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

alert(appData.budget / 30);



