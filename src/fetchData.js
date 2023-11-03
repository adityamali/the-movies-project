export function getMovies(url, imgURL) {

    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);

        main.innerHTML = '';

        for (let i = 0; i < data.results.length; i++) {
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

