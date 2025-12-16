import { Animarbtn } from "./AnimarBtn.js";
const containerCard = document.querySelector(".container-cards");

const dataCard = [
    {
        id : 1,
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria: "Para comenzar con alegria",
        url_music: "./assets/music/Perfect.mp3",
        estado: false
    },
    {
        id : 2,
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria: "Para comenzar con alegria",
        url_music: "./assets/music/Photograph.mp3",
        estado: false
    },
];

export function crearCard(){
    dataCard.forEach(cards =>{
        containerCard.innerHTML += `
             <section class="card">
                <span></span>
                <div class="container-title_card">
                    <section class="title-card">
                        <img class="icon-music" src="./assets/music.svg" alt="icono de musica">
                        <div>
                            <h3>${cards.title}</h3>
                            <span>${cards.author}</span>
                        </div>
                    </section>
                    <section class="btns-music">
                        <img class="icon-play" src="./assets/play.svg" alt="icono de boton play" data-url=${cards.url_music}>
                    </section>
                </div>
                <div class="container-subtitle_card">
                    <img src="./assets/heart-lock.svg" width=24" alt="icono de corazon">
                    <span>${cards.dedicatoria}</span>
                </div>
                <dialog id="modal">
                    <p id="modalTexto">Bienvenido</p>
                    <button class="close-modal">Cerrar</button>
                </dialog>
            </section>
        `;
    })

    Animarbtn();
}


