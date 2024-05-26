//To identify and print all even numbers in an array of integers:
const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const num of arr) {
    if (num % 2 === 0) {
        console.log(num);
    }
}

//To find the sum of the first 10 numbers:
let total: number = 0;

for (let i = 1; i <= 10; i++) {
    total += i;
}

console.log("Sum of the first 10 numbers:", total);

//To print the multiplication table for the number 5:
const num: number = 5;

for (let i = 1; i <= 10; i++) {
    console.log(num + ' x ' + i + ' = ' + num * i);
}
