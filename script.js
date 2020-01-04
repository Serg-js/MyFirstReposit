'use strict';

var number = 5;
var string = 'Hello';
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4/0); // Infinity
console.log('string' * 4); // NaN

//console.log(something); // null - это когда в коде нет этого

let some;
console.log(some); // undefined - в коде это есть, но в нем ничего нет

let persone = {
    name: 'John',
    age: 25,
    isMarried: false
}

console.log(persone.name);

let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];

console.log(arr[2]);

//alert('Hello world');

//let answer = confirm('Are you here');

//console.log(answer);

//let answer = +prompt('Есть ли вам 18', 'Да');

//console.log(typeof(answer));

let incr = 10,
    decr = 10;

console.log(incr++);
console.log(decr--);

console.log(5%2);

console.log('2' === 2);

let isCheked = false,
    isClose = false;

console.log(isCheked || !isClose);