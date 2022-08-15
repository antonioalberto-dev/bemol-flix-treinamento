const url =
  "https://api.themoviedb.org/3/movie/550?api_key=718ff094890773202d9924c2fd6a7f98";

divResposta = document.querySelector(".resposta");

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    console.log(response);
    let title = response.title;
    let img = response.poster_path;

    console.log(img);

    divResposta.innerHTML = `<p>${title}</p>
    <img src="${img}" width="100px" height="100px" class="resposta-image" alt=">`;
  });
