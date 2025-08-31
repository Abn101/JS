
const API_URL = "https://official-joke-api.appspot.com/random_joke";
const ouptut = document.getElementById('output');
document.getElementById('search-1').addEventListener('click', () => {
    function getJoke(callback) {
        setTimeout(async () => {
            const response = await fetch(API_URL);
            const data = await response.json();
            callback(`${data.setup} 😂 ${data.punchline}`);
        }, 500);
    }
    getJoke((joke) => {
        ouptut.textContent = joke;
    });
});
document.getElementById('search-2').addEventListener('click', () => {
    function getJokePromise() {
        return new Promise((resolve, reject) => {
            fetch(API_URL)
                .then(response => response.json())
                .then(data => resolve(`${data.setup} 😂 ${data.punchline}`))
                .catch(error => reject("Failed to Fetch Joke"));

        });
    }
    getJokePromise()
        .then(joke => {
            ouptut.textContent = joke;
        }
        );
});
document.getElementById('search-3').addEventListener('click',async ()=>{
    async function getJokeAsync() {
        const response = await fetch(API_URL);
        const data = await response.json();
        return `${data.setup} 😂 ${data.punchline}`;
    }
     const joke = await getJokeAsync();
     ouptut.textContent = joke;
})