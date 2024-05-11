const pikachu = document.getElementById('pikachu');
const thunderbolt = document.getElementById('thunderbolt');

let positionX = 0;
let isThunderboltDisplayed = false;

function movePikachu() {
    positionX += 5;
    pikachu.style.transform = translateX(${positionX}px);
    if (positionX > window.innerWidth) {
        positionX = -150;
    }
    if (positionX === 300 && !isThunderboltDisplayed) {
        thunderbolt.style.display = 'block';
        setTimeout(() => {
            thunderbolt.style.display = 'none';
        }, 1000);
        isThunderboltDisplayed = true;
    }
    requestAnimationFrame(movePikachu);
}

movePikachu();