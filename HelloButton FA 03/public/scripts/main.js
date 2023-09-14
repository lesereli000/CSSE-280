let counter = 0;

main = function(){
    console.log('Ready');

    document.querySelector("#decBtn").onclick = (event) => {
        console.log("decrement button");
        counter = counter - 1;
        updateView();
    };

    document.querySelector("#resBtn").onclick = (event) => {
        console.log("reset button");
        counter = 0;
        updateView();
    };

    document.querySelector("#incBtn").onclick = (event) => {
        console.log("increment button");
        counter = counter + 1;
        updateView();
    };
}

updateView = function(){
    document.querySelector("#ctrText").innerHTML = `Count = ${counter}`;
}

main();