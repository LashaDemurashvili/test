'use strict';

// in map for key we can use any data types
const testMap = new Map();
testMap.set('name', 'lasha')
testMap.set(1, 'pirveli sajaro skola')
testMap.set(2, 'meore sajaro skola')

// set many parameters
testMap.set('categoriesArray', ['cat1, cat2, cat3']).set('open', 10).set('close', 22).set(true, 'We Open !').set(false, 'We Closed !')

console.log(testMap);

console.log('\nusing get() method ');

console.log(testMap.get('name'));
// console.log(testMap.get(true));
// console.log(testMap.get(false));

const time = 8;

console.log(testMap.get(time > testMap.get('open') && time < testMap.get('close')));

const tstHasAttr = 11
console.log(testMap.has(tstHasAttr) ? testMap.get(tstHasAttr) : 'not has !');

testMap.delete(1)
console.log(testMap);

console.log(typeof testMap); //type is object

// clear entire map
testMap.clear()
console.log(testMap);
