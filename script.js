"use strict";

console.log("hello functions!");

// function logCode() {
//   console.log('log');
// }

// let getSquare = function (num) {
//   return num ** 2;
// }


// let arr = [
//   function () {
//     console.log('hello');
//   },
//   function () {
//     console.log('hello2');
//   }
// ];

// arr[0]();
// arr[1]();

// let obj = {
//   name: 'Harry',
//   func1: function () { console.log('a') },
//   func2: function () { console.log('b') },
//   sayHello: function () { console.log(`Hello ${this.name}`) },
//   logThis: function () { console.log(this) },
//   logArrowThis: () => { console.log(this) }
// };

// obj.func1();
// obj.sayHello();
// obj.logThis();
// obj.logArrowThis();


// // отличия стрелочной функции

// let getSquare = function (num) {
//   // console.log(this);
//   // console.log(arguments);
//   return num ** 2;
// }

// let getSquare2 = (num) => {
//   // console.log(this);
//   // console.log(arguments);
//   return num ** 2;
// }

// console.log(getSquare(2));
// console.log(getSquare2(2));

// Вложенные функции и области видимости в них
// function test() {
//   let num = 1;

//   function func() {
//     num++;
//     console.log(num);

//   }

//   func();
// }

// test();

// function func(num) {
//   let num2 = num + 3
//   return function (num2) {
//     return num2;
//   }
// }

// let res = func(1)(5);
// console.log(res);


// Замыкания

// let i;

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// console.log(i);

// function test() {
//   let num = 1;
//   return function () {
//     console.log(num);
//     num++;
//   }
// }

// let func = test();
// let func2 = test();
// func();
// func();
// func();
// test()();
// func();
// func();
// func2();
// func2();

// let test = function () {
//   let num = 1;
//   return function () {
//     console.log(num);
//     num++;
//   }
// }()();

// Рекурсия

let obj = {
  arr: [2, 4, 5, [1, 2, 4], [3, 2, 1, [true, false]]],
  innerObj: {
    name: 'Harry',
    secondName: 'Potter',
    faculty: 'Griffindor',
    enemis: ['Maffoy', 'Dudly']
  },
  age: 15,
  weigh: 50
};

function copyObject(obj) {
  let newObj = typeof obj === 'object' && !Array.isArray(obj) ? {} : []; // определяем тип объекта
  if (Object.keys(obj).length) { // есть ли у него ключи, не пустой ли он
    let keys = Object.keys(obj); // длина массива для цикла
    for (let i = 0; i < keys.length; i++) {
      // обрабатываем объект
      if (typeof obj[keys[i]] === 'object' && !Array.isArray(obj[keys[i]])) {
        newObj[keys[i]] = copyObject(obj[keys[i]]);
        // обрабатываем массив
      } else if (Array.isArray(obj[keys[i]])) {
        newObj[keys[i]] = [];
        for (let j = 0; j < obj[keys[i]].length; j++) {
          if (typeof obj[keys[i]][j] === 'object') {
            newObj[keys[i]][j] = copyObject(obj[keys[i]][j]);
          } else {
            newObj[keys[i]][j] = obj[keys[i]][j];
          }
        }
      } // обрабатываем примитивы
      else {
        newObj[keys[i]] = obj[keys[i]];
      }
    }
  }
  return newObj;
}

console.log(obj);
console.log(copyObject(obj));