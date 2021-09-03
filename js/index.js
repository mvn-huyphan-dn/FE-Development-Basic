console.log('1. Define a variable')

let user = { name: 'David' };
let card = { amount: 7, product: "Bar", unitprice: 42 };
var message = "Hello " + user.name + ",\n" +
  "want to buy " + card.amount + " " + card.product + " for\n" +
  "a total of " + (card.amount * card.unitprice) + " bucks?";
let message1 = `Hello ${user.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`;
console.log(message);
console.log(message1);
console.log('-----------------------------------------------');

// 3. Rest Parameter
//   - ES5
//   ```

function foo(x, y) {
  var a = Array.prototype.slice.call(arguments, 2);
  return (x + y) * a.length;
};
foo(1, 2, 'hello', true, 7) === 9;

function foo1(x, y, ...args) {
  return (x + y) * args.length;
};

//   ```
// ​
// 4. Default Parameter Values
//   - ES5
//   ```

function sum(x, y, z) {
  if (y === undefined) {
    y = 7;
  }
  if (z === undefined) {
    z = 42;
  }
  return x + y + z;
};

function sum1(x, y = 7, z = 42) {
  return x + y + z;
};

//   ```
// ​
// 5. Arrow Functions
//   - ES5
//   ```
console.log('5. Arrow Functions')

var evens = [1, 2, 3, 4, 5, 6];
var odds = evens.map(function (v) { return v + 1; });
var pairs = evens.map(function (v) { return { even: v, odd: v + 1 }; });
var nums = evens.map(function (v, i) { return v + i; });
var fives = [];
nums.forEach(function (v) {
  if (v % 5 === 0) {
    fives.push(v);
  }
});

console.log('evens', evens);
console.log('odds', odds);
console.log('pairs', pairs);
console.log('nums', nums);
console.log('fives', fives);

let evens1 = [1, 2, 3, 4, 5, 6];
let odds1 = evens1.map((v) => v + 1);
let pairs1 = evens1.map((v) => ({ even: v, odd: v + 1 }));
let nums1 = evens1.map((v, i) => v + i);
let fives1 = nums1.filter((v) => v % 5 === 0);

console.log('evens1', evens1);
console.log('odds1', odds1);
console.log('pairs1', pairs1);
console.log('nums1', nums1);
console.log('fives1', fives1);

console.log('-----------------------------------------------');

//   ```
// ​
// 6. Classes
//   - ES5
//   ```
console.log('6. Classes')

var Shape = function (id, x, y) {
  this.id = id;
  this.move(x, y);
};
Shape.prototype.move = function (x, y) {
  this.x = x;
  this.y = y;
};

let a = new Shape(5, 4, 3);
console.log(a)

class Shape1 {
  constructor(id, x, y) {
    this.id = id;
    this.move(x, y);
  }
  move(x, y) {
    this.x = x;
    this.y = y;
  }
}

let b = new Shape1(5, 4, 3);
console.log(b)

console.log('-----------------------------------------------');

//   ```
// ​
// 7. Modules
//   - ES5
//   ```

//   //  lib/utils.js
//   Utils = {};
//   Utils.sum = function(x, y) { return x + y };
//   Utils.pi = 3.141593;
// ​
//   //  someApp.js
//   var math = Utils;
//   console.log("2π = " + math.sum(math.pi, math.pi));
// ​
//   //  otherApp.js
//   var sum = Utils.sum, pi = Utils.pi;
//   console.log('2π = ' + sum(pi, pi));

//   //  lib/utils.js
//   export function sum(x, y) { return x + y };
//   export var pi = 3.141593;
// ​
//   //  someApp.js
//   import * as utils from 'lib/utils';
//   console.log("2π = " + utils.sum(utils.pi, utils.pi));
// ​
//   //  otherApp.js
//   import { sum, pi } from 'lib/utils';
//   console.log('2π = ' + sum(pi, pi));

//   ```
// ​
// 8. Promise
//   - ES5
//   ```
function showMessAfterTimeout(msg, who, timeout, onDone) {
  setTimeout(function () {
    onDone(msg + ' Hi ' + who + '!');
  }, timeout);
};
showMessAfterTimeout('', 'Foo', 100, function (msg) {
  showMessAfterTimeout(msg, 'Bar', 200, function (msg) {
    console.log('8. Promise\nFinish after 300ms:' + msg);
  });
});

function showMessAfterTimeout1(msg, who, timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${msg} Hi ${who}!`), timeout)
  })
};

showMessAfterTimeout1('', 'Foo', 100).then((msg) =>
  showMessAfterTimeout1(msg, 'Bar', 200).then((msg) => {
    console.log(`Finish after 300ms:${msg}`);
  })
);
//   ```
// ​
// 9. Loops
//   - Give an example for each method: 
//     + for…of
//     + findIndex()
console.log('9. Loops')
console.log('+ for…of')

Array.prototype.arrCustom = function () { };
Object.prototype.objCustom = function () { };

let arr = [16, 17, 18, 'fourth'];
arr['five'] = 'fifth';

console.log('arr', arr)

console.log('for ... in')
s1 = []
for (let i in arr) {
  s1.push(i)
}
console.log('s1: ', s1.join(', '))

console.log('for ... of')
s2 = []
for (let i of arr) {
  s2.push(i)
}
console.log('s2: ', s2.join(', '))

console.log('+ findIndex()')

fIndex = arr.findIndex(e => e === 'fourth');
console.log(`findIndex 'fourth'`, fIndex)
console.log('-----------------------------------------------');
