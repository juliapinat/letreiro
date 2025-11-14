let letreiro = document.getElementById("letreiro");
let tela = document.getElementById("tela");

let posX = 0;                        // posição inicial (esquerda → direita)
let direcao = 1;                     // 1 = direita, -1 = esquerda

let velocidade = 2;                  // controle de VELOCIDADE (px por frame)

/* Função de animação */
function animar() {

    posX += direcao * velocidade;
    letreiro.style.left = posX + "px";

    /* Limites de movimento */
    let limiteDireita = tela.clientWidth - letreiro.clientWidth;

    if (posX >= limiteDireita) {
        direcao = -1;               // volta para a esquerda
    }

    if (posX <= 0) {
        direcao = 1;                // volta para a direita
    }

    requestAnimationFrame(animar);
}

/* Iniciar animação */
animar();
