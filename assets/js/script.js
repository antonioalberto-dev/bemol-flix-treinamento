const API_KEY = "api_key=718ff094890773202d9924c2fd6a7f98";
const URL_BASE = "https://api.themoviedb.org/3";
const URL_API = URL_BASE + "/discover/movie?sort_by=popularity.desc&" + API_KEY;

const IMG_URL = "https://image.tmdb.org/t/p/w500";

const listaProdutos = document.querySelector(".lista-produtos");

getData(URL_API);

function getData(URL_API) {
  fetch(URL_API)
    .then((resposta) => {
      return resposta.json();
    })
    .then((resposta) => {
      showData(resposta.results);
    });
}

function showData(data) {
  data.forEach((item) => {
    const { title, poster_path, overview, vote_average } = item;
    listaProdutos.innerHTML += `
        <div class="card">
            <img src="${IMG_URL + poster_path}" alt="${title}" />
            <p class="descricao">${title}</p>
            <div class="card-info">
                <p class="preco">R$ ${(vote_average * 2.0).toFixed(2)}</p>
            </div>
        </div>
        `;
  });
}
