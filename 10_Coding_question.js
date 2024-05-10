//=======================Q.1 HoW to empty an array in JavaScript==========================4
console.log(" Q.1 HoW to empty an array in JavaScript");

var arrayList = ["a", "b", "c", "d", "e", "f"];
//method1
arrayList = [];

console.log(arrayList);

console.log("------method2 ------");
//method2
var arrayList = ["a", "b", "c", "d", "e", "f"];
arrayList.length = 0;
console.log(arrayList);

console.log("------method3 ------");

var arrayList = ["a", "b", "c", "d", "e", "f"];

arrayList.splice(0, arrayList.length);
console.log(arrayList);

// ==================================================== make duplicate ===============
console.log("Q2 duplicate ");

//Q2 duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]

const duplicate = [1, 2, 3, 4, 5];
const duplicate2 = duplicate.concat(duplicate);
console.log(duplicate2);

// ==================================================== Q3 nasted function ===============
console.log("Q3 nasted function");

const mul = (x) => {
  return function (y) {
    return function (z) {
      return x * y * z;
    };
  };
};
console.log(mul(2)(3)(4));
console.log(mul(4)(3)(4)); // output : 48

// ==================================================== Q3 nasted function ===============

for (let i = 1; i <= 100; i++) {
  let f = i % 3 == 0,
    b = i % 5 == 0;
  // console.log(f ? (b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : i);
}

//============4 Remove duplicates from an array ====================

console.log("4 Remove duplicates from an array");

var chars = ["A", "B", "A", "C", "B"];
var uniqueChars = [...new Set(chars)];
console.log(uniqueChars);

//method 2

// const uniqueFilter=()=>{}
var array = ["A", "B", "A", "C", "B"];

// console.log(array.indexOf("A"));

uniquearray = array.filter((val, i) => {
  return array.indexOf(val) == i;
});
console.log(uniquearray);

var array = ["A", "B", "A", "C", "B"];

uniquearray = [];
array.forEach((val, i) => {
  if (!uniquearray.includes(val)) {
    uniquearray.push(val);
  }
  // else {
  // console.log(true);
  //     uniquearray.push(val)

  // }
});

console.log(uniquearray);

//============reverse String ====================

var reverse = "reverse String ";

// Write a simple JavaScript program to join all elements of the following array into a string.

console.log(
  "simple JavaScript program to join all elements of the following array into a string."
);

var myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString()); //Red,Green,White,Black
console.log(myColor.join("  ")); //Red  Green  White  Black
console.log(myColor.join("+")); //Red+Green+White+Black

//Pre and post increment

console.log(
  "=======Pre first it will inreament and them assing to value to variable ============="
);

var a = 10;
var b = ++a;
console.log(a);
console.log(b);

console.log(
  "=======post it will not increent same value is applied to variable ============="
);

var a = 10;
var b = a++;
console.log(a);
console.log(b);

var a = 10;
var b = a++;
console.log(a);
console.log(b);

//Pre and post decrement

console.log("Pre and post decrement");
var x = 10;
var y = --x;

console.log(x);
console.log(y);

var x = 10;
var y = x--;

console.log(x);
console.log(y);

// ------------------------------
// const fun = (x, x) => {
//     return console.log(x + "" + x);
// }
// fun(1, 2)

function func22(x, x) {
  console.log(x + "" + x);
}
func22("addd", "22");

var a = [1, 2, 3];
var b = a;
b[0] = 5;

console.log(a);
console.log(b);
