window.onload = function() {

    let letreiro = document.getElementById("letreiro");
    let tela = document.getElementById("tela");

    let posX = 0;                 // posição inicial
    let direcao = 1;              // 1 = direita, -1 = esquerda
    let velocidade = 2;           // velocidade

    function animar() {

        posX += direcao * velocidade;
        letreiro.style.left = posX + "px";

        let limiteDireita = tela.clientWidth - letreiro.clientWidth;

        if (posX >= limiteDireita) {
            direcao = -1;
        }

        if (posX <= 0) {
            direcao = 1;
        }

        requestAnimationFrame(animar);
    }

    animar();
};

