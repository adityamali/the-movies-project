import _ from 'lodash';

import { searchURL, imgURL, apiURL } from './tmdbassets';
import { getMovies, getMoviesRslt, getSingle } from './fetchData';

const main = document.getElementById('main');
const movies = document.getElementById('movies');
const single = document.getElementById('singlePage');

const form = document.getElementById('search-form');
const search = document.getElementById('search')

getMovies(apiURL, imgURL);
getSingle(apiURL, imgURL);


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTearm = search.value;

    if (searchTearm) {
        getMoviesRslt(searchURL + '&query=' + searchTearm, imgURL);
    }
    if (searchTearm == "") {
        getMovies(apiURL, imgURL);
    }
})