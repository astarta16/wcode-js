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
console.log("Sum of this numbers is", + result);
