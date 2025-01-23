import { albuns } from "./albuns.js";


const divImage_album = document.getElementById("image_album")
const divBtn = document.getElementById("btn-lightmode")
const divMain = document.getElementById("div-main")
const divNavegacao = document.getElementById("navegacao")
const divTitulo = document.getElementById("titulo")



const url = new URL(window.location.href)

const params = new URLSearchParams(url.search)

const nome_album = params.get("nome_album")

const findAlbum = albuns.find(e => e.nome === nome_album)



divImage_album.innerHTML += `
<div>
    <img class="image" src="${findAlbum.capa}" alt=""> 
    <h2>${findAlbum.nome}</h2>
    <h3>${findAlbum.artista}</h3>
    <p>Ano: ${findAlbum.ano}</p>
</div>   `


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
    })
    