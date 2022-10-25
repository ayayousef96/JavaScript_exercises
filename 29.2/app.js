const btn = document.querySelector(".btn");
const title = document.querySelector(".title");
const text = document.querySelector(".text");


btn.addEventListener('click', getJoke);

async function getJoke(){
    const result = await fetch('https://api.jokes.one/jod');
    const data = await result.json();
    title.innerHTML = data.contents.jokes[0].joke.title;
    text.innerHTML = data.contents.jokes[0].joke.text;

}