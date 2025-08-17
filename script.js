let arr= ["door", "car", "tree", "house", "computer", "keyboard", "mouse", "monitor", "phone", "tablet"];
let game_start = document.querySelector(".game_start");
let game_container = document.querySelector(".game_container");
let start_game_btn = document.querySelector(".start_game_btn");
let inputChar= document.querySelector(".inputchar");
let canvas = document.querySelector('#gameCanvas');
let ctx = canvas.getContext("2d");

let counter= 0;

game_container.style.display = 'none';

start_game_btn.addEventListener('click', () => {
    game_start.style.display = 'none';
    game_container.style.display = 'flex';
    game_container.style.flexDirection = 'column';
    game_container.style.justifyContent = 'center';
    game_container.style.alignItems = 'center';
    game_container.style.gap = '20px';
});

let check_btn = document.querySelector('#button-addon2');
let word_char = document.querySelector('.word_char');

let randomItem = arr[Math.floor(Math.random() * arr.length)];

function renderWord(word){
    word_char.innerHTML = '';
    for (let i = 0; i < word.length; i++) {
        word_char.innerHTML += `<div class="char border border-2 rounded" style="width:50px; height:50px; text-align:center;">_</div>`;
    }
}

renderWord(randomItem);
check_btn.addEventListener('click', checkInput);
inputChar.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        checkInput();
    }
});

function checkInput() {
    let inpValue = inputChar.value;
    if (inpValue.length === 1 &&inpValue!="" && /^[a-zA-Z]$/.test(inpValue) && randomItem.includes(inpValue)) {
        let charElements = document.querySelectorAll('.word_char .char');
        for (let i = 0; i < randomItem.length; i++) {  
            if (randomItem[i] === inpValue) {
                charElements[i].textContent = inpValue;
                charElements[i].style.backgroundColor = 'green';
                inputChar.value = '';
            }
        }
        if( Array.from(charElements).every(el => el.textContent !== '_')) {
            setTimeout(() => {
                alert("You Win! The word was: " + randomItem);
                inputChar.value = '';
                counter = 0;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                randomItem = arr[Math.floor(Math.random() * arr.length)];
                renderWord(randomItem);
            }, 500);
        }
    } else {
        inputChar.value = '';
        counter++;

        if (counter === 1) {
            ctx.beginPath();
            ctx.arc(200, 100, 40, 0, 2 * Math.PI);
            ctx.strokeStyle = "red";
            ctx.lineWidth = 3;
            ctx.stroke();
        }
        if (counter === 2) {
            ctx.beginPath();
            ctx.moveTo(200, 140);
            ctx.lineTo(200, 240);
            ctx.stroke();
        }
        if (counter === 3) {
            ctx.beginPath();
            ctx.moveTo(200, 160);
            ctx.lineTo(150, 200);
            ctx.stroke();
        }
        if (counter === 4) {
            ctx.beginPath();
            ctx.moveTo(200, 160);
            ctx.lineTo(250, 200);
            ctx.stroke();
        }
        if (counter === 5) {
            ctx.beginPath();
            ctx.moveTo(200, 240);
            ctx.lineTo(160, 300);
            ctx.stroke();
        }
        if (counter === 6) {
            ctx.beginPath();
            ctx.moveTo(200, 240);
            ctx.lineTo(240, 300);
            ctx.stroke();
        }
        if (counter == 7) {
            ctx.beginPath();
            ctx.moveTo(160, 150);
            ctx.lineTo(240, 150);
            ctx.stroke();
            counter = 0;
            setTimeout(() => {
                alert("Game Over! The word was: " + randomItem);
                inputChar.value = '';
                counter = 0;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                randomItem = arr[Math.floor(Math.random() * arr.length)];
                renderWord(randomItem);
            }, 500);
        }
    }
}
