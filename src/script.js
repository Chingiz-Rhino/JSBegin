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
 if (2*4 ==8) {
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

}
//Циклы
let num = 50;
/* while (num < 55) {
    console.log(num);
    num++;
} */

do {
    console.log(num);
    num++;
}
while(num < 55);

for(let i = 1; i < 8; i++) {
    if(i==6) {
        continue
    }
    console.log(i);
}
