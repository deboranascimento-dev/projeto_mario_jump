const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe-obstaculo');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(()=>{
        mario.classList.remove('jump')
    }, 500);

}

const loop = setInterval(()=> {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    const pipeWidth = pipe.offsetWidth;
    const marioWidth = mario.offsetWidth;


    if(pipePosition < marioWidth &&
        pipePosition> 0 && 
        marioPosition < pipeWidth
    ) {
        pipe.style.animation ='none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation ='none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src='./imgens/game-over.png';
        mario.style.width = "75px"
        mario.style.marginLeft = "50px"

        clearInterval(loop)
    }
}, 10);

document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);