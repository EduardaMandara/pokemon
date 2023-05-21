const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");
const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

botaoAlterarTema.addEventListener("click", () => {

    if (modoEscuroEstaAtivo) {

    } else {
        body.classList.add("modo-escuro"); 
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/img/moon.png");
    }
})