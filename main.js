let order = [];
let clickedOrder = [];
let score = 0;


//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//CRIA ORDEM ALEATORIA DE CORES
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }

}


//ACENTE A PROXIMA COR
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });

}

//CHECA SE OS BOTOES CLICADOS SÃO OS MESMOS  DA ORDEM GERADA PELO JOGO
let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            GameOver();
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê Acertou!! Iniciando proximo nivel!`);
        nextLevel();
    }
}

//FUNÇAO PARA O CLIQUE DO USUARIO
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}


//FUNÇAO  QUE RETORNA COR
let createColorElement = (color) => {
    if (color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }

}


//FUNÇAO PARA PROXIMONIVEL DE JOGO
let nextLevel = () => {
    score++;
    shuffleOrder();
}

// FUNÇAO PARA GAME OVER
let GameOver = () => {
    alert(`Pontuação:  ${score}\n Você perdeu o jogo\nCliqu em OK pra iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    playgame();
}

//FUNÇAO DO INICIO DO JOGO 
let playgame = () => {
    // alert(`Bem Vindo ao  NEW GENIUS HARDS!! INICIANDO O JOGO! `);

    score = 0;
    nextLevel();
}

//EVENTO DO CLIQUE PARA AS CORES
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);