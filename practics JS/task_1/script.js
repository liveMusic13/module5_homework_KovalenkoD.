'use strict';

/*============Задание1==============*/

// let inputValue = +prompt('enter', "");

// console.log(typeof inputValue);
// console.log(inputValue);

// if (typeof inputValue === 'number') {
//   if (isNaN(inputValue)) {
//     console.log('Упс, кажется, вы ошиблись');
//   } else if (inputValue % 2 === 0) {
//     console.log('четное');
//   } else if (inputValue % 2 !== 0) {
//     console.log('нечетное');
//   }
// }

// Почему не работает если проверять на NaN через строгое равенство как тут?
// if (typeof inputValue === 'number') {
//   if (inputValue === NaN) {
//     console.log('Упс, кажется, вы ошиблись');
//   } else if (inputValue % 2 === 0) {
//     console.log('четное');
//   } else if (inputValue % 2 !== 0) {
//     console.log('нечетное');
//   }
// }

/*============Задание2==============*/

// let x = true;

// if (typeof x === 'number') {
//   console.log(`${x} - number`);
// } else if (typeof x === 'string') {
//   console.log(`${x} - string`);
// } else if (typeof x === 'boolean') {
//   console.log(`${x} - boolean`);
// } else {
//   console.log(`Тип ${x} не определён`);
// }

/*============Задание3==============*/
// function stringReverse(str) {
//   let arrayStr = [];
//   for (let i = 0; i < str.length; i++) {
//     arrayStr.push(str[i]);
//     console.log(arrayStr);
//   }
//   return arrayStr.reverse().join('');

// }

// console.log(stringReverse("Hello"));

/*============Задание4==============*/

// let randomNumber = Math.floor(Math.random() * (100 - 0 + 1)) + 0;

// console.log(randomNumber);

/*============Задание5==============*/

// let randomArray = [23, 33, 56, 9];

// console.log(randomArray.length);

// for (let i = 0; i <= randomArray.length; i++) {
//   console.log(randomArray[i]);
// }
/*============Задание6==============*/

// let randomArray = [1, 1, 1, 1];
// let testArray = [];

// randomArray.forEach(function (item) {
//   let x = item;

//   randomArray.forEach(function (item) {
//     if (x === item) {
//       console.log(true);
//     } else {
//       console.log(false);
//     }
//   });
// });


/*============Задание7==============*/

// let randomArray = [3, 2, 3, 1, null];
// let evenItems = 0;
// let unEvenItems = 0;

// randomArray.forEach(function (item) {
//   if (item === null) {
//     console.log(null);
//   } else if (item % 2 === 0) {
//     evenItems++;
//   } else {
//     unEvenItems++;
//   }
// });
// console.log(evenItems);
// console.log(unEvenItems);

/*============Задание8==============*/
// мои попытки 1

// let testMap = new Map();
// testMap.set('boolean', true);
// testMap.set('number', 1);
// testMap.set('string', 'str')
// let keyX = '';
// let valueY = '';
// let result = `Ключ — ${keyX}, значение — ${valueY}`

// for (let key of testMap.keys()) {
//   keyX = key;

//   for (let value of testMap.values()) {
//     valueY = value;
//     console.log(result);
//     continue;
//   }

//   keyX = '';
//   valueY = '';
// }

// мои попытки 2

// let testMap = new Map();
// testMap.set('boolean', true);
// testMap.set('number', 1);
// testMap.set('string', 'str')
// for (let key of testMap.keys()) {
//   let keyF = '';
//   let valueF = '';
//   keyF = key;
//   for (let value of testMap.values()) {
//     valueF = value;
//     console.log(`Ключ — ${keyF}, значение — ${valueF}`);
//     key++;
//   }
//   break;
// }

// взят из обсуждения

// let testMap = new Map([
//   ['boolean', true],
//   ['number', 1],
//   ['string', 'str']
// ]);
// for (let key of testMap) {
//   console.log(`Ключ - ${key[0]}, Значение - ${testMap[1]}`);
// }
