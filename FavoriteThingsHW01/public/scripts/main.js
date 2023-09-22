let counter = 0;

main =function(){
    console.log('Ready');

    document.querySelector("#dec").onclick = (event) => {
        console.log("decrement button");
        counter = counter - 1;
        updateCtr();
    };

    document.querySelector("#res").onclick = (event) => {
        console.log("reset button");
        counter = 0;
        updateCtr();
    };

    document.querySelector("#inc").onclick = (event) => {
        console.log("increment button");
        counter = counter + 1;
        updateCtr();
    };

    document.querySelector("#clrBlue").onclick = (event) => {
        console.log("blue button");
        paint("blue");
        const colorArea = document.getElementById("colorArea");
        colorArea.innerHTML = 'Blue';
    };

    document.querySelector("#clrGreen").onclick = (event) => {
        console.log("green button");
        paint("green");
        const colorArea = document.getElementById("colorArea");
        colorArea.innerHTML = 'Green';
    };

    document.querySelector("#clrRed").onclick = (event) => {
        console.log("red button");
        paint("red");
        const colorArea = document.getElementById("colorArea");
        colorArea.innerHTML = 'Red';
    };

    document.querySelector("#clrPurple").onclick = (event) => {
        console.log("purple button");
        paint("purple");
        const colorArea = document.getElementById("colorArea");
        colorArea.innerHTML = 'Purple';
    };
}

updateCtr = function(){
    document.querySelector("#counter").innerHTML = `${counter}`;
}

paint = function(color){
    console.log(color);
    const colorArea = document.getElementById('colorArea');
    colorArea.style = `background-color:${color}`;
    console.log(colorArea);
}

main();