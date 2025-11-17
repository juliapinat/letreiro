const texto = document.getElementById("texto");
const container = document.getElementById("container");

// posição inicial
let pos = 0;
let velocidade = 2;  // ajuste da velocidade
let indoDireita = true;

function animar() {
    const larguraTexto = texto.offsetWidth;
    const larguraContainer = container.offsetWidth;

    if (indoDireita) {
        pos += velocidade;
        if (pos >= larguraContainer - larguraTexto) {
            indoDireita = false; // chegou ao final, volta
        }
    } else {
        pos -= velocidade;
        if (pos <= 0) {
            indoDireita = true; // chegou ao início, vai para direita
        }
    }

    texto.style.left = pos + "px";

    requestAnimationFrame(animar); // animação suave
}

animar();


