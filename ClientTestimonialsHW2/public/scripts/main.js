const client = document.getElementById("name");
const desc = document.getElementById("desc");
const img = document.getElementById("img");

function getRandomInt() {
    return Math.floor(Math.random() * 10) + 1;
}

function clearText() {
    client.innerHTML = "";
    desc.innerHTML = "";
}

function processText (text) {
    while(text.includes(".")){
        text = text.replace(".", "!!!\n");
    }
    return text;
}

function textToArray (text) {
    let textArr = [];
    let prevInd = 0;
    let i = 0;
    while(true){
        let ind = text.indexOf("\n", prevInd);
        if(ind === -1){
            break;
        }
        textArr.push(text.substring(prevInd, ind));
        prevInd = ind + 1;
    }
    return textArr;
}

function appendText (textArray) {
    let finalText = "";
    for(i in textArray){
        finalText += `<span style="display: block">${textArray[i]}</span>`;
        console.log(finalText);
    }
    desc.innerHTML = finalText;
}

function updateClient () {

    let text = '';
    let id = getRandomInt();

    // fetch request
    fetch(`https://64486933e7eb3378ca2e0f51.mockapi.io/api/users?id=${id}`)
    .then(response => response.json())
    .then(data => {
        clearText();
        client.innerHTML = `${data[0].name}`;
        text = data[0].message;
        // desc.innerHTML = data[0].message;
        img.src = `${data[0].avatar}`

        // console.log(text);
        text = processText(text);
        // console.log(text);
        text = textToArray(text);
        console.log(text);
        appendText(text);
    })
    .catch(error => {
        console.error("There was an error fething data: ", error);
    });
}


updateClient();

document.getElementById('newClient').addEventListener('click', function(){
    updateClient();
});