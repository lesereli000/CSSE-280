// Q1
for(let i = 2; i <= 10; i += 2){
    console.log(`${i}\n`);
}

// Q2
for(let i = 5; i > 0; i--){
    console.log(`${i}\n`);
}

// Q3
const arr1 = [1, 2, 3, 4, 5];
let sum = 0;
for(const item of arr1){
    sum += item;
}
console.log(`${sum}\n`);

// Q4
const student = {name: 'John', age: 20, grade: 'A'};
for(const key in student){
    console.log(`${key}\n`);
}

// Q5
const book = {title: 'Harry Potter', author: 'J.K. Rowling', year: 1997};
for(const key in book){
    console.log(`${key}: ${book[key]}\n`);
}

// Q6
const colors = ['red', 'green', 'blue', 'yellow'];
for(const color of colors){
    console.log(`${color}\n`);
}

// Q7
const arr2 = [1, 2, 3, 4, 5];
let sum2 = 0;
for(const item of arr2){
    sum2 += item;
}
console.log(`${sum2}\n`);

// Q8
const temps = [32, 68, 75, 82, 56];
temps.forEach(toCelcius)

function toCelcius(temp){
    let celTemp = (temp - 32) * 5 / 9;
    console.log(`${celTemp}\n`);
}

// Q9
const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston'];
const pops = {'New York': 8398748, 'Los Angeles': 3990456, 'Chicago': 2705994, 'Houston':2320268};

cities.forEach(getPops);

function getPops(city){
    console.log(`${city}: ${pops[city]}\n`)
}

// Q10
for(let i = 1; i < 6; i++){
    let out = "";
    for(let j = 0; j < i; j++){
        out += "*";
    }
    console.log(`${out}\n`);
}