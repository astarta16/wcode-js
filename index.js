"use strict";

// N1
function sum(numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

let numbers = [10, 50, 6, 7, 8, 11, 6, 3, 9];
let result = sum(numbers);
console.log("Sum of this numbers is", +result);

// N2

function getFullName(user) {
  if (user.isloggedin) {
    return `${user.firstname} ${user.lastname}`;
  } else {
    return false;
  }
}

let user = {
  firstname: "giorgi",
  lastname: "saakadze",
  age: 32,
  isloggedin: true,
};

console.log(getFullName(user));

// N3
function getMaxNumber(numbersList) {
  if (numbersList.length === 0) {
    return null;
  }
  let maxNumber = numbersList[0];
  for (let i = 1; i < numbersList.length; i++) {
    if (numbersList[i] > maxNumber) {
      maxNumber = numbersList[i];
    }
  }
  return maxNumber;
}

let numbersList = [3, 7, 1, 9, 2, 10, 5];
console.log(getMaxNumber(numbersList));

// N3 B
function MaxNumber(mathNumbers) {
  if (mathNumbers.length == 0) {
    return null;
  }
  return Math.max(...mathNumbers);
}

let mathNumbers = [3, 7, 1, 9, 2, 10, 15, 20, 5];
console.log(MaxNumber(mathNumbers));

// N4
function checkNumber(number) {
  if (number % 2 == 0) {
    return "number is even";
  }
  return "number is odd";
}

console.log(checkNumber(5));
console.log(checkNumber(4));

// N5
let array = [1, 2, 3, 4, 5];
let reversedArray = [];

for (let i = 0; i < array.length; i++) {
  reversedArray[i] = array[array.length - 1 - i];
}

console.log(reversedArray);


// N6
let checkUserAge = (age) => (age > 18 ? "სრულწლოვანი" : "არასრულლოვანი");

console.log(checkUserAge(20));
console.log(checkUserAge(15));

// N7
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < array2.length; i++) {
  if (array2[i] === 5) {
    console.log("არის");
    break;
  }
}

// N8
let array3 = [1, 2, 3, 4, 5];
sum = 0;

for (let i = 0; i < array3.length; i++) {
  sum += array3[i];
}

console.log(sum);

// N9
let array4 = [1, 2, 3, 4, 5];
let total = 0;

for (let i = 0; i < array4.length; i++) {
  total += array4[i];
}

let avarage = total / array4.length;
console.log(avarage);

// N10
let array5 = [1, 2, 3, 7, 6, 9];

for (let i = 0; i < array5.length; i++) {
  if (array5[i] === 7) {
    continue;
  }
  console.log(array5[i]);
}

// N11
let array7 = [32, 14, null, "40", 50];

function multiplesOfFive(arr) {
  let resultOfFive = [];
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (typeof item === "number" && item % 5 === 0) {
      resultOfFive.push(item);
    }
  }
  return resultOfFive;
}

let resultOfFive = multiplesOfFive(array7);
console.log(resultOfFive);


// N12
let array8 = [ [2, -3, 5, 11], [1, -35, -11], [12, -36, -24] ];

function printPositiveNumbers(arr) {
  arr.forEach(subArray => {
    subArray.forEach(number => {
      if (number > 0) {
        console.log(number);
      }
    });
  });
}

printPositiveNumbers(array8);
