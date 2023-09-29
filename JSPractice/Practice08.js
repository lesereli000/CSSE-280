// Q1
function multiply(a, b){
return a * b;
}

// Q2
function isEven(num){
return num % 2 == 0;
}

// Q3
const subtract = function(a, b){
    return a - b;
}

let difference = subtract();

// Q4
const greeting = function(name = 'World'){
    return `Hello ${name}`;
}

// Q5
function calculate(x, y){
    const sum = function(x,y){
        return x + y;
    }
    return sum(x, y);
}

// Q6
function average(num1, num2, num3){
    const calc = function(num1, num2, num3){
        return (num1 + num2 + num3) / 3;
    }
    return calc(num1, num2, num3);
}

// Q7
const multiply = (a, b) => a * b;

// Q8
const greet = (name) => `Hello ${name}!`;

// Q9
const square = (x) => x * x;

// Q10
const isEven = (x) => num % 2 == 0;

// Q11
const findMax = (numbers) => Math.max(numbers);

// Q12
const addTwoNumbers = (a, b) => a + b;