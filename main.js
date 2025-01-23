import { albuns } from "./albuns.js";
import { musicas } from "./musicas.js";
import { sugestoes } from "./sugestoes.js"

// SELETORES -> getElementById
const divMusicas = document.getElementById("div-musicas")
const divAlbuns = document.getElementById("div-albuns")
const divMain = document.getElementById("div-main")
const divTitulo = document.getElementById("titulo")
const divSugestoes = document.getElementById("div-sugestoes")
const btnLightMode = document.getElementById("btn-lightmode")
const btnSearch = document.getElementById("btn-search")
const logoNavegacao = document.getElementById("navegacao")
const inputNavegacao = document.getElementById('input-query')
const h2TituloMusicas = document.getElementById('titulo-musicas')
const h2TituloAlbuns = document.getElementById('titulo-albuns')


musicas.map(element => {
    divMusicas.innerHTML += `   
       <div class='col-sm-12 col-md-6 col-lg-3'>
        <div class='card mb-2 divs-musica'> 
            <img class="thumb" src="${element.imagem}" alt=""> 
            <h2 class="exemplo">${element.nome}</h2>
            <p>${element.artista}, ${element.album}</p>
            <p>Duração: ${element.duracao}</p>
            <audio controls>
                <source src="${element.mp3}" type="audio/mpeg">
            </audio>
            <a href="/musicas.html?nome_musica=${element.nome}" class="legenda">Clique aqui</a>
        </div>
       </div>
    `
});
const divsMusica = document.querySelectorAll('.divs-musica');

divsMusica.forEach((div) => {
    div.addEventListener('click', () => {
        alert('Cliquei na div')
    })
});

// divsMusica.forEach((element) => {
//     console.log(element)
// })

albuns.map(element => {
    divAlbuns.innerHTML += `
    <div class='col-sm-12 col-md-6 col-lg-3'>
        <div class='card mb-2'> 
            <img class="thumb" src="${element.capa}" alt=""> 
            <h2>${element.nome}</h2>
            <p>${element.artista}</p>
            <p>${element.ano}, ${element.genero}</p> 
                        <a href="/albuns.html?nome_album=${element.nome}" class="legenda">Clique aqui</a>
     
        </div>
       </div>`
})

btnLightMode.addEventListener('click', () => {
    if (divMain.classList.contains('main-dark')) {
        divMain.classList.add('main-light');
        divMain.classList.remove('main-dark');
        logoNavegacao.classList.remove('bg-dark')
        divTitulo.classList.add('text-dark')
        return null
    }
    if (divMain.classList.contains('main-light')) {
        divMain.classList.remove('main-light');
        divMain.classList.add('main-dark');
        logoNavegacao.classList.add('bg-dark')
        divTitulo.classList.remove('text-dark')
        return null
    }
})


sugestoes.map(element => {
    divSugestoes.innerHTML += `
    <div class='col-sm-12 col-md-6 col-lg-3'>
        <div class='card mb-2'> 
            <img class="thumb" src="${element.imagem}" alt=""> 
            <h2>${element.nome}</h2>
            <p>${element.artista}, ${element.album}</p>
            <p>Duração: ${element.duracao}</p>
        </div>
       </div>`

})
btnSearch.addEventListener('click', (event) => {
    event.preventDefault()
    const query = inputNavegacao.value
    const filterbyquery = musicas.filter((e, i) => e.nome.toLowerCase().includes(query.toLowerCase()))
    const filterbyqueryAlbuns = albuns.filter((e, i) => e.nome.toLowerCase().includes(query.toLowerCase()))

    if (filterbyquery.length === 0 && filterbyqueryAlbuns.length === 0) {
        return alert('Nao foi possivel encontrar tal pesquisa')
    }

    h2TituloMusicas.innerHTML = ""

    h2TituloAlbuns.innerHTML = ""
   


    divMusicas.innerHTML = ""


    filterbyquery.map(element => {
        divMusicas.innerHTML += `   
       <div class='col-sm-12 col-md-6 col-lg-3'>
        <div class='card mb-2'> 
            <img class="thumb" src="${element.imagem}" alt=""> 
            <h2>${element.nome}</h2>
            <p>${element.artista}, ${element.album}</p>
            <p>Duração: ${element.duracao}</p>
            <audio controls>
                <source src="${element.mp3}" type="audio/mpeg">
            </audio>
            <a href="/musicas.html?nome_musica=${element.nome}" class="legenda">Clique aqui</a>
        </div>
       </div>
    `
    })

    divAlbuns.innerHTML = ""

    filterbyqueryAlbuns.map(element =>
        divAlbuns.innerHTML +=
        `   
       <div class='col-sm-12 col-md-6 col-lg-3'>
        <div class='card mb-2'> 
            <img class="thumb" src="${element.capa}" alt=""> 
            <h2>${element.nome}</h2>
            <p>${element.artista}, ${element.ano}</p>
            <p>Duração: ${element.genero}</p>
            <a href="/musicas.html?nome_musica=${element.nome}" class="legenda">Clique aqui</a>
        </div>
       </div>
    `
    )

})


/** ao clicar na logo, voltar para a pagina inicial */
/** ao fazer uma busca de musica ou album, nao aparecer o texto 'musica' ou 'album' */









