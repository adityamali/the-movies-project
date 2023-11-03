import _ from 'lodash';

import { searchURL, imgURL, apiURL } from './tmdbassets';
import { getMovies } from './fetchData';

const main = document.getElementById('main');

const form = document.getElementById('form');
const search = document.getElementById('search')


getMovies(apiURL, imgURL);


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTearm = search.value;

    if (searchTearm) {
        getMovies(searchURL + '&query=' + searchTearm);
    }
    if (searchTearm == "") {
        getMovies(apiURL);
    }
})