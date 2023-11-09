const list = document.getElementById("months");
const move = document.getElementById("move");
const reset = document.getElementById("reset");
const from = document.getElementById("from");
const to = document.getElementById("to");
const inOrder = ["January", "February", "March", "April", 
                "May", "June", "July", "August", "September",
                "October", "November", "December"];

function updateDisplay(arr){
    console.log(arr);
    var child = list.lastElementChild;  
    while (child) { 
        list.removeChild(child); 
        child = list.lastElementChild; 
    } 
    for (let item of arr){
        let li = document.createElement("li");
        li.innerHTML = item;
        list.appendChild(li);
    }
}

fetch("http://localhost:3000/api/getmonths")
.then(response => response.json())
.then(data =>{
    updateDisplay(data);
});

move.addEventListener("click", () => {
    fetch(`http://localhost:3000/api/move/${from.value}/${to.value}`, {method: "PUT"})
    .then(response => response.json())
    .then(data =>{
        data = data.months;
        updateDisplay(data);
    });
});

reset.addEventListener("click", () => {
    fetch("http://localhost:3000/api/setmonths", {
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'},
        method: "POST",
        body: `{"months":${JSON.stringify(inOrder)}}`})
    .then(response => response.json())
    .then(data =>{
        updateDisplay(data);
    });
});