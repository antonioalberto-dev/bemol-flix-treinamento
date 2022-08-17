const API_KEY = "api_key=718ff094890773202d9924c2fd6a7f98";
const URL_BASE = "https://api.themoviedb.org/3"
const URL_API = URL_BASE + "/discover/movie?sort_by=popularity.desc&" + API_KEY;

const div = document.querySelector('.lista-produtos')

fetch(URL_API)
  .then((resposta) => {
    return resposta.json();
  })
  .then((resposta) => console.log(resposta));
