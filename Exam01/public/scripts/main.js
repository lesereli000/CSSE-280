function main(){
    const photo = document.getElementById("mainPhoto");
    const name = document.getElementById("name");
    const btn = document.getElementById("button");

    btn.onclick = (event) => {
        console.log("clicked");
        if(name.innerHTML == `Hedwig!!`) {
            name.innerHTML = `Pidwidgeon!!`;
            photo.src = "images/pigwidgeon.png";
            photo.alt = "pidwidgeon";
            document.getElementById("mainText").height = "29vh";
        } else {
            name.innerHTML = `Hedwig!!`;
            photo.src = "images/hedwig.png";
            photo.alt = "pidwidgeon";
            document.getElementById("mainText").height = `39vh;`;
        }
    };
}

main();