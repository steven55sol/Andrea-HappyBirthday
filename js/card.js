import { Animarbtn } from "./AnimarBtn.js";
const containerCard = document.querySelector(".container-cards");

const dataCard = [
    {
        id : "01",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria: "Para comenzar con alegria",
        url_music: "./assets/music/Perfect.mp3"
    },
    {
        id : "02",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria: "Cada día contigo es hermoso",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "03",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria: "Tu luz ilumina todo",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "04",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria: "Eres mi inspiración diaria",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "05",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria: "Contigo, todo es mejor",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "06",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria: "Gracias por ser tú",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "07",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria: "Eres mi alegría constante",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "08",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria: "Mi vida es mejor contigo",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "09",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria: "Perfecta tal como eres",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "10",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria: "Brillas como fuegos artificiales",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "11",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria: "Por Tu Belleza Unica",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "12",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria: "Porque me haces feliz",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "13",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria: "La razón de mi sonrisa",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "14",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria: "La luz de mi vida",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "15",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria: "La musica de mi corazón",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "16",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria: "La persona que admiro",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "17",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria: "Por todos los sueños cumplidos",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "18",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria: "Por tu amable corazón",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "19",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria: "Por venir a mi vida",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "20",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria: "Por estar siempre ahi",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "21",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria: "Por esos lindos cachetes",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "22",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria: "Por tu risa de sol",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "23",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria: "Por tus palabras cariñosas",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "24",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria: "Por tu alma hermosa",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "25",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria: "Por que hoy es tu día",
        url_music: "./assets/music/Photograph.mp3"
    }
];

export function crearCard(){
    dataCard.forEach(cards =>{
        containerCard.innerHTML += `
             <section class="card">
                <span class="card-number">${cards.id}</span>
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
    });
    
    Animarbtn();
    CardsScroll();
}

function CardsScroll() {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const index = [...cards].indexOf(entry.target);

            // Las primeras 5 siempre visibles
            if (index < 3) {
                entry.target.classList.add("visible");
                return;
            }

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, {
        threshold: 0.8
    });

    cards.forEach(card => observer.observe(card));
}



