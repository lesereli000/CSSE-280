document.getElementById('fetchData').addEventListener('click', function(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
        document.getElementById('dataContainer').innerHTML = `
            <p><strong>Here's a Joke:</strong> ${data.value}</p>
        `;
    })
    .catch(error => {
        console.error("There was an error fething data: ", error);
    });
});