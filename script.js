const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const button = document.querySelector('.buttonPlayAgain');

const jump = () => {

    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);

}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = clouds.offsetLeft;

    if(pipePosition <= 125 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'gameOver.png';
        mario.style.width = '105px';
        mario.style.marginLeft = '25px';

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        button.style.display = 'block';

        clearInterval(loop);
    }
    
}, 10);

document.addEventListener("keydown", jump);