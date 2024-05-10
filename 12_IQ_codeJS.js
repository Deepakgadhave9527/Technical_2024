console.log(" Q.1 HoW to empty an array in JavaScript");

var arrayList = ["a", "b", "c", "d", "e", "f"];
arrayList.length = 0;
console.log(arrayList);

var arrayList = ["a", "b", "c", "d", "e", "f"];
arrayList = [];
console.log(arrayList);

var arrayList = ["a", "b", "c", "d", "e", "f"];
arrayList.splice(0, arrayList.length);
console.log(arrayList);

console.log("============  duplicate ======================");

// Q2 duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]

var duplicate = ["A", "B", "A", "C", "B"];
var set = [...new Set(duplicate)];
console.log(set);

const notuniquearray = [];
const uniquearray = [];
duplicate.forEach((val) => {
  if (uniquearray.includes(val)) {
    console.log(uniquearray.includes(val) + val);
    notuniquearray.push(val);
  } else {
    uniquearray.push(val);
  }
});
console.log(uniquearray);
console.log(notuniquearray);

var duplicate3 = [1, 55, 111, 2, 3, 3, 4, 4, 5, 2, 11, 33, 44, 44];

var unique = duplicate3.filter((val, i) => {
  return duplicate3.indexOf(val) == i;
});

console.log(unique);

// console.log(duplicate);

var ascending = unique.sort(function (a, b) {
  return a - b;
});
console.log(ascending);

console.log("==============max ==================");

var duplicate3 = [1, 55, 111, 2, 3, 3, 4, 4, 5, 2, 11, 33, 44, 44];
var max = Math.max(...duplicate3);

var math = Math.max.apply(null, duplicate3);
console.log(math);

console.log("==================Factorial logic =========================");

var val = 4;
var total = 1;

for (var i = 0; i < val; i++) {
  console.log(total + "--" + (val - i) + "--" + total * (val - i));
  total = total * (val - i);
}

console.log(total);
