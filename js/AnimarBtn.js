export function Animarbtn(dataCard){
    const btnPlay = document.querySelectorAll('.icon-play');
    const btnClose = document.querySelector(".close-modal");
    const modal = document.querySelector(".modal");

    let audioActual = null;
    
    btnPlay.forEach((btn,i) => {
        btn.addEventListener('click', e=>{

            const {frase} = dataCard[i];
            const modalTexto = document.getElementById("modalTexto");
            modalTexto.textContent = frase;

            if(audioActual){
                audioActual.pause();
                audioActual.currentTime = 0;
            }

            audioActual = new Audio(btn.dataset.url);
            audioActual.play();

            modal.showModal();
            modal.style.position = "fixed";
        });

    })

    function detenerMusic(){
        audioActual.pause();
        audioActual.currentTime = 0;
        audioActual = null;
    }

    btnClose.addEventListener('click', ()=>{
        detenerMusic();
        modal.close()
    })

    
}
