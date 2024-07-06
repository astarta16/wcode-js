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

N3;
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
