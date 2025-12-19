import { Animarbtn } from "./AnimarBtn.js";
const containerCard = document.querySelector(".container-cards");

const dataCard = [
    {
        id : "01",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria:"Para comenzar con alegría",
        frase: "Hoy es un día especial ya que hoy cumple 1 año de vida y tenemos que agradecerles a sus padres por traerla a este mundo a una senorita tan hermosa",
        url_music: "./assets/music/Perfect.mp3"
    },
    {
        id : "02",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria:"Tu luz ilumina todo a tu alrededor",
        frase: "Como a pasado el tiempo, parece que fue ayer cuando cumplio su primer año de vida, seguro su linda sonrisa nos seguira iluminando por muchos años mas",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "03",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria:"Eres muy especial y te mereces lo mejor",
        frase: "En este tercer año seguro aprendio a dar sus pasos debe verse muy adorable cuanto pagaria para verlo",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "04",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria:"Que sigas creciendo feliz y saludable",
        frase: "La princesa de la casa ya tiene 4 años, que rapido pasa el tiempo, sus cachetes adorables seguro robo muchos corazones",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "05",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria:"Eres una niña maravillosa",
        frase: "Feliz cumpleaños numero 5, que emocion debe ser ver como tu pequeña va creciendo y aprendiendo cosas nuevas cada dia",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "06",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria:"Que este año este lleno de amor y felicidad",
        frase: "Ya son 6 años de muchas aventuras y travesuras, seguro cada dia es una nueva experiencia llena de amor y felicidad",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "07",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria:"Eres una niña muy especial",
        frase: "Eres una niña muy especial y en tu septimo cumpleaños deseo que todos tus sueños se hagan realidad",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "08",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria:"Sigue siendo tan dulce y cariñosa",
        frase: "Feliz cumpleaños numero 8, que este año este lleno de risas, juegos y momentos inolvidables",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "09",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria:"Eres una niña increíble y te mereces lo mejor",
        frase: "Feliz cumpleaños numero 9, cuantos dientes de leche habras perdido ya, seguro tu sonrisa es cada dia mas hermosa",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "10",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria:"Que este nuevo año de vida este lleno de bendiciones",
        frase: "Feliz cumpleaños numero 10, que emocion llegar a los dos digitos, de aqui la vida sera aun mas divertida y mas cuando tienes a alguien que te ama",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "11",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria:"Eres alguien especial y te mereces lo mejor",
        frase: "Tus 11 primaveras son un reflejo de la belleza y la alegría que traes a tus seres queridos",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "12",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria:"Sigue brillando con luz propia",
        frase: "Eres una niña increíble y en tu duodécimo cumpleaños deseo que sigas brillando con luz propia",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "13",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria:"Por los recuerdos felices",
        frase: "Treceavo cumpleaños lleno de magia y sueños por cumplir cada dia crece mas hermosa",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "14",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria:"Eres una persona maravillosa y increible",
        frase: "En tu catorceavo cumpleaños deseo que sigas siendo esa niña dulce y cariñosa que ilumina la vida de quienes te rodean",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "15",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria:"Que todos tus sueños se hagan realidad",
        frase: "Que en tu quinceavo cumpleaños te sientas rodeada de amor y felicidad, no se si tuvo fiesta pero seguro se vio hermosa con su vestido rosa",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "16",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria:"Eres una persona fuerte y valiente",
        frase: "Tu forma de ver el mundo es única y especial, nunca dejes de soñar y de creer en ti misma y ser tan fuerte como siempre has sido",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "17",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria:"Que nada detenga tus metas y sueños",
        frase: "Cerca de ser adolescente, que emocion debe ser para ti descubrir nuevas cosas y vivir nuevas experiencias",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "18",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria:"Eres una persona maravillosa y llena de vida",
        frase: "En este decimo octavo cumpleaños deseo que sigas siendo esa persona maravillosa y llena de vida que todos amamos",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "19",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria:"Feliz cumpleaños numero 19",
        frase: "Vive este dia con alegria y rodeada de las personas que te quieren, feliz cumpleaños numero 19",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "20",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria:"Tu energia y alegria son contagiosas",
        frase: "Estoy feliz de celebrar contigo este dia tan especial, que este nuevo año de vida te traiga muchas bendiciones y momentos felices",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "21",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria:"No hay mejor lugar que estar contigo",
        frase: "Seguro esos lindos cachetes siguen igual de adorables que cuando era niña, como quisiera peñiscar esos cachetes",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "22",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria:"Eres una persona unica y Imparable",
        frase: "Tus ojos brillan y brillaran con la misma inocencia y curiosidad que cuando eras pequeña",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "23",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria:"Sigue persiguiendo tus sueños",
        frase: "La vida a sido dificil pero tu has sabido salir adelante con valentia y determinacion eres una guerrera",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "24",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria:"Por muchos años mas juntos",
        frase: "Parecia ayer cuando hablabamos de nuestros cumpleaños, ha pasado un mes desde el primer mensaje y estoy feliz por verte cumplir un año mas",
        url_music: "./assets/music/Photograph.mp3"
    },
    {
        id : "25",
        title: "lorem ipsum dolor",
        author: "Stevie Wonder",
        dedicatoria:"Por tu felicidad y bienestar",
        frase: "Feliz cumpleaños numero 25, que este nuevo año de vida este lleno de amor, felicidad y muchos logros personales y profesionales aunque no lo celebramos juntos espero este detalle te demuestre que siempre estare contigo",
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
                    <img src="./assets/images/tulipan.png" width="48px" alt="icono de tulipanes">
                    <p id="modalTexto">${cards.frase}</p>
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



