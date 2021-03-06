

const apiKey = 'api_key=85cb3ce779175fccfcf2729ae6cfe0fb';
const baseURL = 'https://api.themoviedb.org/3/';
const apiURL = baseURL + 'discover/movie?sort_by=popularity.desc&' + apiKey;
const imgURL = 'https://image.tmdb.org/t/p/w500';
const searchURL = baseURL + 'search/movie?' + apiKey;

const main = document.getElementById('main');

const form = document.getElementById('form');
const search = document.getElementById('search')

getMovies(apiURL);

function getMovies(url) {

    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);

        main.innerHTML = '';

        for (let i = 0; i < data.results.length; i++){
            const movieEl = document.createElement('div');
            movieEl.classList.add('movie');
            movieEl.innerHTML = `
        <img src="${imgURL + data.results[i].backdrop_path}" alt="${data.results[i].original_title}">
        <div class="movie-info">
            <h5>${data.results[i].original_title}</h5>
            <span id = "ratebg" class="${getColor(data.results[i].vote_average)}">${data.results[i].vote_average}</span>
        </div>
        <div class="overview">
            ${data.results[i].overview}
        </div>
        <div class="add">
            +
        </div>
        `
            main.appendChild(movieEl);
        }

    })

}

function showMovies(data) {

}

function getColor(rating) {
    if (rating >= 7.5) {
        return 'green';
    }
    else if (rating >= 4.5) {
        return 'orange';
    }
    else {
        return 'red';
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTearm = search.value;

    if (searchTearm){
        getMovies(searchURL + '&query=' + searchTearm);
    }
    if (searchTearm == ""){
        getMovies(apiURL);
    }
})