const inputBtn = document.querySelector(".input");
const card = document.querySelector(".card");
const search = document.querySelector(".btn");


search.addEventListener("click", () => {
    movie_name = inputBtn.value;
    inputBtn.value = "";
    card.innerHTML="";
    get_fetch(movie_name);
  });


  async function  get_fetch(movie_name){
    const res = await fetch(`http://www.omdbapi.com/?apikey=ea084fef&t=${movie_name}`);
    const data= await res.json(); 
    if(data){
        console.log(data);
        get_movie(data);

    }
    else{
        console.log("ERROR!!!");
    } 
    
}

function get_movie(data){
    poster(data);
    title(data);
    Genre(data);
    year(data);
    plot(data);
    Director(data);
    Actors(data);
    ratings(data);

}
function poster(data){
    const poster = document.createElement("img");
    poster.width = "200";
    poster.height = "200";
    poster.src = data.Poster;
    card.appendChild(poster);
}

function title(data){
    const title = document.createElement("h3");
    title.innerText = data.Title;
    card.appendChild(title);

}
function Genre(data){
    const genre = document.createElement("h4")
    genre.innerText = "Genre: " + data.Genre;
    card.appendChild(genre);
}

function year(data){
    const year = document.createElement("h4")
    year.innerText = "Year: " + data.Year;
    card.appendChild(year);
}
function plot(data){
    const plot = document.createElement("h5")
    plot.innerText = "Plot: " + data.Plot;
    card.appendChild(plot);
}
function Director(data){
    const director = document.createElement("h4");
    director.innerText = "Director: " + data.Director;
    card.appendChild(director);
}

function Actors(data){
    const actors = document.createElement("h4");
    actors.innerText = "Actors: " + data.Actors;
    card.appendChild(actors);
}

function ratings(data){
    const ratings = document.createElement('p');
    ratings.innerText= "Rating: " 
    for(let i = 0; i<data.Ratings.length; i++){
        ratings.innerText += ` ${i+1}:  ${data.Ratings[i].Source} : ${data.Ratings[i].Value} `;
    }
    card.appendChild(ratings);
}



// {
//     "Title": "Harry Potter and the Deathly Hallows: Part 2",
//     "Year": "2011",
//     "Rated": "PG-13",
//     "Released": "15 Jul 2011",
//     "Runtime": "130 min",
//     "Genre": "Adventure, Fantasy, Mystery",
//     "Director": "David Yates",
//     "Writer": "Steve Kloves, J.K. Rowling",
//     "Actors": "Daniel Radcliffe, Emma Watson, Rupert Grint",
//     "Plot": "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
//     "Language": "English, Latin",
//     "Country": "United Kingdom, United States",
//     "Awards": "Nominated for 3 Oscars. 46 wins & 94 nominations total",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
//     "Ratings": [
//         {
//             "Source": "Internet Movie Database",
//             "Value": "8.1/10"
//         },
//         {
//             "Source": "Rotten Tomatoes",
//             "Value": "96%"
//         },
//         {
//             "Source": "Metacritic",
//             "Value": "85/100"
//         }
//     ],
//     "Metascore": "85",
//     "imdbRating": "8.1",
//     "imdbVotes": "865,376",
//     "imdbID": "tt1201607",
//     "Type": "movie",
//     "DVD": "11 Nov 2011",
//     "BoxOffice": "$381,447,587",
//     "Production": "N/A",
//     "Website": "N/A",
//     "Response": "True"
// }