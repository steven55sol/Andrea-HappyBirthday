export function Animarbtn(){
    const btnPlay = document.querySelectorAll('.icon-play');
    const btnClose = document.querySelector(".close-modal");
    const modal = document.querySelector("#modal");

    let audioActual = null;
    
    btnPlay.forEach(btn => {
        btn.addEventListener('click', e=>{
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
