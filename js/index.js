'use strict'

// Differences between `==` and `===` example
console.log("Differences between `==` and `===` example")
var a1 = 0;
var a2 = false;
var b1 = "";
var b2 = false;
var c1 = "";
var c2 = 0;
var d1 = '0';
var d2 = 0;
var e1 = '7';
var e2 = 7;
var f1 = [2, 0, 2, 1];
var f2 = '2,0,2,1';
var g1 = new String('MLVN');
var g2 = 'MLVN';
var h1 = null;
var h2 = undefined;
console.log('x =', a1, 'type', typeof (a1), '\ny =', a2, 'type', typeof (a2), '\nx ==  y: ', a1 == a2, '\nx === y: ', a1 === a2)
console.log('x =', b1, 'type', typeof (b1), '\ny =', b2, 'type', typeof (b2), '\nx ==  y: ', b1 == b2, '\nx === y: ', b1 === b2);
console.log('x =', c1, 'type', typeof (c1), '\ny =', c2, 'type', typeof (c2), '\nx ==  y: ', c1 == c2, '\nx === y: ', c1 === c2);
console.log('x =', d1, 'type', typeof (d1), '\ny =', d2, 'type', typeof (d2), '\nx ==  y: ', d1 == d2, '\nx === y: ', d1 === d2);
console.log('x =', e1, 'type', typeof (e1), '\ny =', e2, 'type', typeof (e2), '\nx ==  y: ', e1 == e2, '\nx === y: ', e1 === e2);
console.log('x =', f1, 'type', typeof (f1), '\ny =', f2, 'type', typeof (f2), '\nx ==  y: ', f1 == f2, '\nx === y: ', f1 === f2);
console.log('x =', g1, 'type', typeof (g1), '\ny =', g2, 'type', typeof (g2), '\nx ==  y: ', g1 == g2, '\nx === y: ', g1 === g2);
console.log('x =', h1, 'type', typeof (h1), '\ny =', h2, 'type', typeof (h2), '\nx ==  y: ', h1 == h2, '\nx === y: ', h1 === h2);
console.log('----------------------------------------------------------------');

// Give an example for each of the following methods in Javascript
// + map
// + filter
// + reduce
// + find
// + some
var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('data', data);

console.log("Give an example for each of the following methods in Javascript");

console.log('+ map');
var objmap = data.map(obj => obj += 7);
console.log('obj map `+=7`\n', objmap);

console.log('+ filter');
var objfilter = data.filter(obj => obj % 2 === 0);
console.log('obj filter `%2 === 0`\n', objfilter);

console.log('+ reduce');
var objreduce = data.reduce((a, b) => {
  if (b % 3 === 0) {
    a.push(b);
  }
  return a;
}, [12]);
console.log('obj reduce `%3 === 0 with initial value 12`\n', objreduce);

console.log('+ find');
var objfind = data.find(obj => obj % 2 === 0 && obj % 3 === 0);
console.log('obj find `% 2 ===0 && % 3 === 0`\n', objfind);

console.log('+ some');
var objsome = data.some(obj => obj % 4)
console.log('obj some `% 4 ===0`\n', objsome);
console.log('----------------------------------------------------------------');

// Give an example for add a new element to an array[] (at the end)
console.log('Give an example for add a new element to an array[] (at the end)');
var temp1 = data.slice();
var temp3 = data.slice();
var temp5 = data.slice();


console.log('temp1, temp3, temp5', data);
temp1.push('temp1');
console.log('temp1 push', temp1);
var temp2 = data.concat('temp2');
console.log('temp2 concat', temp2);
temp3[temp3.length] = 'temp3';
console.log('temp3 array.length', temp3);
var temp4 = [...data, 'temp4'];
console.log('temp4 spread operator', temp4);
temp5.splice(temp5.length, 0, 'temp5');
console.log('temp5 splice', temp5);
console.log('----------------------------------------------------------------');

// Give an example for add a new element to an array[] (at the beginning)
console.log('Give an example for add a new element to an array[] (at the beginning)');
var temp6 = data.slice();
var temp7 = data.slice();

console.log('temp6, temp7', data);
temp6.unshift('temp6');
console.log('temp6 unshift', temp6);
temp7.splice(0, 0, 'temp7');
console.log('temp7 splice', temp7);
var temp8 = ['temp8'].concat(data);
console.log('temp8 concat', temp8);
var temp9 = ['temp9', ...data];
console.log('temp9 spread operator', temp9);
console.log('----------------------------------------------------------------');


// Give an example for removing an element in array[]
console.log('Give an example for removing an element in array[]');
var temp10 = data.slice();
var temp12 = data.slice();
var temp13 = data.slice();
var temp14 = data.slice();

console.log('temp10, temp12, temp13, temp14', data);
temp10.splice(6, 1);
console.log('temp10 splice', temp10);
var temp11 = data.filter(obj => obj !== 7);
console.log('temp11 filter', temp11);
temp12.shift();
console.log('temp12 shift', temp12);
temp13.pop();
console.log('temp13 pop', temp13);
temp14.length = temp14.length - 1;
console.log('temp14 array.length', temp14);
console.log('----------------------------------------------------------------');

// ### Playground
// 1. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
console.log('1. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.');

function part1(a, b) {
  var result;
  if (Number.isInteger(a) && Number.isInteger(b)) {
    result =  a === b ? 6 * a : a + b;
  } else {
    result = 'Input Invalid'
  };
  return result;
};

console.log(Number.isInteger(1.5) && Number.isInteger(2))

console.log('a=1, b=2', part1(1, 2));
console.log('a=2, b=2', part1(2, 2));
console.log('a=1.5, b=2', part1(1.5, 2));
console.log('a=`2.5`, b=2', part1('2.5', 2));
console.log('a=`c`, b=2', part1('c', 2));
console.log('----------------------------------------------------------------');

// 2. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.
console.log('2. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.');

function part2(a) {
  var result;
  if (!isNaN(a)) {
    result = a < 19 ? 19 - a : 3 * (a - 19);
  } else {
    result = 'Input Invalid';
  };
  return result;
};

console.log('a=5', part2(5));
console.log('a=19', part2(19));
console.log('a=30', part2(30));
console.log('a=12.5', part2(12.5));
console.log('a=`8`', part2('8'));
console.log('a=`c`', part2('c'));
console.log('----------------------------------------------------------------');

// 3. A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 3.
console.log('3. A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 3.');

function part3(obj) {
  var result = [];
  if (obj[0] === "*") {
    for (var i = 1; i <= 9; i++) {
      if (obj.replace("*", i) % 3 === 0) result.push(obj.replace("*", i));
    }
  } else {
    for (var i = 0; i <= 9; i++) {
      if (obj.replace("*", i) % 3 === 0) result.push(obj.replace("*", i));
    }
  }
  return result;
};

var a = '*12';
var b = '123*5';
var c = '1234*';
console.log('Input :', a, '\nOutput : ', part3(a));
console.log('Input :', b, '\nOutput : ', part3(b));
console.log('Input :', c, '\nOutput : ', part3(c));
console.log('----------------------------------------------------------------');

// 4. A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 6.
console.log('4. A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 6.');

function part4(obj) {
  var result = [];
  if (obj[0] === "*") {
    for (var i = 1; i <= 9; i++) {
      if (obj.replace("*", i) % 2 === 0 && obj.replace("*", i) % 3 === 0) result.push(obj.replace("*", i));
    }
  } else {
    for (var i = 0; i <= 9; i++) {
      if (obj.replace("*", i) % 2 === 0 && obj.replace("*", i) % 3 === 0) result.push(obj.replace("*", i));
    }
  }
  return result;
};

function part4_1(obj) {
  var result = [];
  for (var i of part3(obj)) {
    if (i % 2 === 0) result.push(i);
  }
  return result;
};

console.log('Input :', a, '\nOutput : ', part4(a));
console.log('Input :', b, '\nOutput : ', part4(b));
console.log('Input :', c, '\nOutput : ', part4(c));
console.log('Input :', a, '\nOutput : ', part4_1(a));
console.log('Input :', b, '\nOutput : ', part4_1(b));
console.log('Input :', c, '\nOutput : ', part4_1(c));
console.log('----------------------------------------------------------------');
