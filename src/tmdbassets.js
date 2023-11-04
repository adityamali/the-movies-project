TMDBapi = process.env.TMDBapi;

export const apiKey = 'api_key=' + TMDBapi;
export const baseURL = 'https://api.themoviedb.org/3/';
export const apiURL = baseURL + 'discover/movie?sort_by=popularity.desc&' + apiKey;
export const imgURL = 'https://image.tmdb.org/t/p/w500';
export const searchURL = baseURL + 'search/movie?' + apiKey;