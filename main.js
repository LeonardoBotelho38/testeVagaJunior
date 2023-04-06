const tela = document.querySelector(".tela");
const emojis = [];

tela.addEventListener("click", (evento) => {
  criaEmoji(evento);
});
function criaEmoji(evento) {
  // if feito para o evento de click não criar emoji ao clicar no botão
  if (evento.target === botaoRetorna) {
    return;
  }
  if (evento.target === botaoAvanca) {
    return;
  }

  let emoji = document.createElement("emoji");
  emoji.innerHTML = "&#128516";
  emoji.className = "circulo";

  //variavel que pega a posição do elemento no evento click
  let x = evento.pageX;
  let y = evento.pageY;

  // add a posição ao elemento
  emoji.setAttribute("style", `top:${y}px; left: ${x}px;`);

  tela.appendChild(emoji);

  // add no array
  emojis.push(emoji);
}

const botaoRetorna = document.querySelector("#retorna");
botaoRetorna.addEventListener("click", () => {
  escondeUltimoEmoji();
});

function escondeUltimoEmoji() {
  for (let i = emojis.length - 1; i >= 0; i--) {
    const emoji = emojis[i];
    if (emoji.style.display === "none") {
      continue;
    }

    emoji.style.display = "none";
    break;
  }
}

const botaoAvanca = document.querySelector("#avanca");
botaoAvanca.addEventListener("click", mostraEmoji);

function mostraEmoji() {
  for (let i = emojis.length - 1; i >= 0; i--) {
    emojis[i].style.display = "block";
  }
}
