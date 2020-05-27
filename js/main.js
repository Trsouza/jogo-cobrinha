let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let cobrinha = [];
let direcao = "right";

cobrinha[0] = {
    x: 3 * box,
    y: 8 * box
}

let comida = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box,
};

function criarBackground() {
    context.fillStyle = "#9adb4f"; //"#7cc24a";
    context.fillRect(0, 0, 20 * box, 20 * box);
}

function criarCobrinha() {
    
    for (i = 0; i < cobrinha.length; i++) {
        context.fillStyle = "#4533e8";
        context.fillRect(cobrinha[i].x, cobrinha[i].y, box, box);
        console.log(cobrinha.length)
    }
}

function criarComida() {
    context.beginPath();
    context.arc(comida.x, comida.y, 16, 0, 2 * Math.PI);
    context.fillStyle = "red";
    context.fill();

    // context.fillStyle = "red";
    // context.fillRect(comida.x, comida.y, box, box);
}

function corpoCobrinha() {
    let cobrinhaX = cobrinha[0].x;
    let cobrinhaY = cobrinha[0].y;

    if (direcao == "right") cobrinhaX += box;
    if (direcao == "left") cobrinhaX -= box;
    if (direcao == "up") cobrinhaY -= box;
    if (direcao == "down") cobrinhaY += box;
    

    if (cobrinhaX != comida.x || cobrinhaY != comida.y) {
        cobrinha.pop();
    } else {
        comida.x = Math.floor(Math.random() * 15 + 1) * box;
        comida.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    let cabeca = {
        x: cobrinhaX,
        y: cobrinhaY
    }
    cobrinha.unshift(cabeca);
    // console.log("c "+ cobrinha.unshift(cabeca));
}    

function fimJogo() {

    if (cobrinha[0].x > 15 * box && direcao == "right") {
        clearInterval(jogo);
        // cobrinha[0].x = 3 * box;
        // cobrinha[0].y = 8 * box;
        alert('Game Over!1');
    } else
    if (cobrinha[0].x < 0 && direcao == "left") {
        clearInterval(jogo);
        // cobrinha[0].x = 3 * box;
        // cobrinha[0].y = 8 * box;
        alert('Game Over2!');
    } else
    if (cobrinha[0].y > 15 * box && direcao == "down") {
        clearInterval(jogo);
        // cobrinha[0].x = 3 * box;
        // cobrinha[0].y = 8 * box;
        alert('Game Over!3');
    } else
    if (cobrinha[0].y < 0 && direcao == "up") {
        clearInterval(jogo);
        // cobrinha[0].x = 3 * box;
        // cobrinha[0].y = 8 * box;
        alert('Game Over4!');
    }

    for (let i = 1; i < cobrinha.length; i++) {
        if (cobrinha[0].x == cobrinha[i].x && cobrinha[0].y == cobrinha[i].y) {
            clearInterval(jogo);
            alert('Game Over5!')
        }
    }
}

document.addEventListener("keydown", movimentacao);

function movimentacao(evento) {
    if (evento.keyCode == 37 && direcao != "right") direcao = "left";
    if (evento.keyCode == 38 && direcao != "down") direcao = "up";
    if (evento.keyCode == 39 && direcao != "left") direcao = "right";
    if (evento.keyCode == 40 && direcao != "up") direcao = "down";
}

function iniciarJogo() {
    fimJogo();
    criarBackground();
    criarCobrinha();
    criarComida();
    corpoCobrinha();

}


function novaPartida() {
}

let jogo = setInterval(iniciarJogo, 200);