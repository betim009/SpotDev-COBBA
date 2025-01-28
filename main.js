// Imports
import { albuns } from "./albuns.js";
import { musicas } from "./musicas.js";
import { sugestoes } from "./sugestoes.js";

// Seletores
const divMusicas = document.getElementById("div-musicas")
const divAlbuns = document.getElementById("div-albuns")
const divBtn = document.getElementById("btn-lightmode")
const divMain = document.getElementById("div-main")
const divNavegacao = document.getElementById("navegacao")
const divTitulo = document.getElementById("titulo")
const divSugestoes = document.getElementById("div-sugestoes")
const btnSearch = document.getElementById("btn-search")
const inputNavegacao = document.getElementById('input-query')
const divTitulo_musicas = document.getElementById('titulo-musicas')
const divTitulo_albuns = document.getElementById('titulo-albuns')

// Funções
const handleCreateElements = (array, div) => {
    array.map(element => {
        div.innerHTML += `   
            <div class='col-sm-12 col-md-6 col-lg-3'>
                <div class='card mb-2 divs-musica'> 
                    <img class="thumb" src="${element.imagem}" alt=""> 
                    <h2>${element.nome}</h2>
                    <p>${element.artista}, ${element.album}</p>
                    <p>Duração: ${element.duracao}</p>
                    <audio controls>
                        <source src="${element.mp3}" type="audio/mpeg">
                    </audio>
                </div>
            </div>
        `
    });
};

const handleCreateAlbuns = (array, div) => {
    array.map(element => {
        div.innerHTML += `
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
};

// Eventos
window.addEventListener('DOMContentLoaded', () => {
    handleCreateElements(musicas, divMusicas);
    const divsMusica = document.querySelectorAll('.divs-musica')
    divsMusica.forEach((div, index) => {
        div.addEventListener('click', () => {
            window.location.href = `/musicas.html?nome_musica=${musicas[index].nome}`
        })
    });

    handleCreateElements(sugestoes, divSugestoes);

    handleCreateAlbuns(albuns, divAlbuns);
});

divBtn.addEventListener('click', () => {
    if (divMain.classList.contains('main-dark')) {
        divMain.classList.add('main-light');
        divMain.classList.remove('main-dark');
        divNavegacao.classList.remove('bg-dark')
        divTitulo.classList.add('text-dark')
        return null
    }
    if (divMain.classList.contains('main-light')) {
        divMain.classList.remove('main-light');
        divMain.classList.add('main-dark');
        divNavegacao.classList.add('bg-dark')
        divTitulo.classList.remove('text-dark')
        return null
    }
});

btnSearch.addEventListener('click', (event) => {
    event.preventDefault()
    const query = inputNavegacao.value
    const filterbyquery = musicas.filter((e, i) => e.nome.toLowerCase().includes(query.toLowerCase()))
    const filterbyqueryAlbuns = albuns.filter((e, i) => e.nome.toLowerCase().includes(query.toLowerCase()))

    if (filterbyquery.length === 0 && filterbyqueryAlbuns.length === 0) {
        return alert('Nao foi possivel encontrar tal pesquisa')
    }

    divTitulo_musicas.innerHTML = ""

    divTitulo_albuns.innerHTML = ""



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