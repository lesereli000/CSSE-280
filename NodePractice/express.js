const express = require("express");
const fs = require("fs");

// const cont = "Ho";

// const data = fs.readFileSync('input.txt');

// console.log(data.toString());
// console.log('Program has ended');

// fs.writeFileSync('input.txt', cont, 'utf-8', (err) => {
//     if(err){
//         console.error("Error writing to the file: ", err);
//         return;
//     }
//     console.log('File is saved');
// });

// console.log("File written successfully");

fs.readFile('input.txt', function(err, data){
    if(err) return console.error(err);
    console.log(data.toString());
});

console.log('Program ended');