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

/* for(let i=0; i<101; i=i+5) {
    console.log(i);
}

let i = 0;
while(i<101) {
    console.log(i);
   i=i+5;
}

let i=0;
do {
    console.log(i);
    i=i+5
}
while(i<101); */

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


//Callback функции

/* function first () {
    //что то делаем
    setTimeout(function(){
        console.log(1);
    }, 500 );
}

function second(){
    console.log(2);
}

first();
second(); */

/* function learnJS(lang, callback) {
    console.log("Я учу " + lang);
    callback();
}

function done() {
    console.log("Я прошёл третий урок!")
}

learnJS('JavaScript', done); */


//Объекты
/* let options = {
    with: 1024,
    height: 1024,
    name: "test"
};

console.log(options.name);
options.bool = false;
options.colors = {
    border: "black",
    bg: "red"
};

delete options.bool;

console.log(options);

for(let key  in options) {
    console.log("Свойство " + key + " имеет " + options[key]);
}

console.log(Object.keys(options).length); */



//Массивы

//let arr = ["first", 2, 3, "four", 5];
//arr[99] = 99;
//console.log(arr.length);


/* for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} */

/* arr.forEach(function(item, i, mass) {
 console.log(i + ": " + item + " (массив: " + mass + ")");
});

console.log(arr);

let mass = [1,3,4,6,7];

for(let key of mass) {
    console.log(key);
} */

/* let ans = prompt("", ""),
    arr = []
arr = ans.split(",");
console.log(arr); */

/* let arr = ["abc", "zzz", "pp", "rqid"],
    i = arr.join(", ");

    console.log(i); */
/* 
    let arr = ["abc", "zzz", "pp", "rqid"],
    i = arr.sort();

    console.log(arr); */

    
   /*  let arr = [1, 15, 4, 7],
    i = arr.sort(compareNum);


    function compareNum(a,b) {
        return a-b
    }

    console.log(arr);


    //Объектно-ориентированное программирование
let solider = {
    health: 400,
    armor: 100
};

let jhon = {
    health: 100
};

jhon.__proto__= solider;

console.log(jhon);
console.log(jhon.armor);



let arr = [1,7,3,4,11,0];
let maxValue = max.apply(11,arr);
console.log(maxValue);
 */

//вывести максимальное число в консоль
/* let arr = [1,7,3,4,11,0];
    max=arr[0];
for (let i=0; i < arr.length; i++) {
    if (arr[i] > max ){
        max=arr[i];
    }    
}
console.log(max);
 */


/* function hello() {
    console.log("Hello World!");
}

hello();

function hi() {
    console.log("Hello World!");
}
hi();

let ar = [1, 15, 4, 30, 42],
    i = arr.sort(compareNum);

function compareNum(a,b) {
    return a-b;
}

console.log(arr); */


//Превращение в строку

// 1)

console.log(typeof(String(4)));

// 2)

console.log("www" + 5);

console.log("https://vk.com/catalog" + 5);


//Превращение в число

// 1)

console.log(typeof(Number('5')));


// 2)

console.log(typeof(5 + +'5'));

// 3)

console.log(typeof(parseInt('15px', 10)));


let ans = +prompt('Hello?', '');

//0, '', null, undefined, NaN - Всегда False

// Логическое преобразование №1
let switcher = null;

if (switcher) {
    console.log("Work..")
}

switcher = 1;
if (switcher) {
    console.log("Work..")
}

// Логическое преобразование №2
console.log(typeof(Boolean('5')));

// Логическое преобразование №3

console.log(typeof(!!'5'));

console.log(0 || '' || 2 || undefined || true || false);