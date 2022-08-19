const palavrasValidas = ["ARROZ", "amora", "teste"];

const palavraDoDia = "ARROZ";

let linha = 1;

let entrada = []; //Lista que recebe as letras digitadas

const ouvinteDeTeclas = (event) => {
  let char = "";
  if (event.target.classList.contains("botao")) {
    char = event.target.innerHTML.toUpperCase(); //Pega letra do teclado da tela e coloca na variável char
  }

  let alfabeto = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "ENTER",
    "BACKSPACE",
  ];

  if (!alfabeto.includes(char)) {
    console.log("tecla inválida", char); //Verifica se a tecla é válida
    return null;
  }

  if (char == "ENTER") {
    //Entra no validarEntrada e verifica o enter
    validarEntrada();
    linha += 1;
    return;
  }

  if (char == "BACKSPACE") {
    entrada.pop();
    console.log(entrada);
    return;
  }

  entrada.push(char);
  console.log(entrada);

  exibeLetra(char);
};
function exibeLetra(letra) {
  let elId = `l${linha}c${entrada.length}`;
  const el = document.querySelector(`.quadrado${entrada.length - 1}`);
  console.log(el);
  el.innerHTML = letra;
}

function validarEntrada() {
  for (let juntar = 0; juntar < 4; juntar++) {
    if (entrada[juntar] == palavraDoDia[juntar]) {
      console.log("chgnadf");
    }
  }
  console.log("validar se " + entrada + " é igual " + palavraDoDia);
}

// document.body.addEventListener("keydown", ouvinteDeTeclas);
