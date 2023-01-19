'use strict';

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
