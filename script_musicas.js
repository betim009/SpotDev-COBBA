import { musicas } from "./musicas.js"


const divImage = document.getElementById("image")


const url = new URL(window.location.href)

const params = new URLSearchParams(url.search)

const nome_musica = params.get('nome_musica')

const findMusica = musicas.find(e => e.nome === nome_musica)


divImage.innerHTML += `
    <div>
    <img class="image" src="${findMusica.imagem}" alt=""> 
        <h2>${findMusica.nome}</h2>
        <h3>${findMusica.artista}</h3>
        <a>Duração: ${findMusica.duracao} min</a>
        <audio controls>
                <source src="${findMusica.mp3}" type="audio/mpeg">
            </audio> 
    </div>
`

