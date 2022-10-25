const btn = document.querySelector(".btn");
const title = document.querySelector(".title");
const text = document.querySelector(".text");


btn.addEventListener('click', getJoke);

function getJoke(){
    fetch('https://api.jokes.one/jod')
    .then((result)=> result.json())
    .then((data)=>{
        console.log(data);
        title.innerHTML = data.contents.jokes[0].joke['title']; //jokes is an array of length 1 and jokes[0] is object that contains joke obj
        text.innerHTML = data.contents.jokes[0].joke['text'];
    });
}