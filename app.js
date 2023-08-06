const joke = document.querySelector('#joke');
const btn = document.querySelector('#btn');

const generateJoke = () => {

    const setHeader = {
        headers : {
            Accept : "application/json"
        }
    }

    fetch('https://icanhazdadjoke.com', setHeader)
    .then((res) => res.json() )
    .then( (data) => {
        joke.innerHTML = data.joke;
    } ).catch((error) => {
        console.log(error);
    })
}

// https://icanhazdadjoke.com
btn.addEventListener('click', generateJoke);
generateJoke();