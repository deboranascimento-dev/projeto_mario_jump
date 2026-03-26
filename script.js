const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe-obstaculo');
const scoreDispley = document.querySelector('.score')
let score = 0
let passad = false
let gameOver = false



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
        pipePosition > 0 && 
        marioPosition < pipeWidth
    ) {
        pipe.style.animation ='none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation ='none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src='./imgens/game-over.png';
        mario.style.width = "75px"
        mario.style.marginLeft = "50px"

        gameOver = true;

        clearInterval(loop)

    }

    if (pipePosition <= 0 && pipePosition > -80 && !passad) {
        score++;
        scoreDispley.innerHTML = score;
        passad = true
    }
    if(pipePosition > 0) {
        passad = false;   
    }
}, 10);



document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);