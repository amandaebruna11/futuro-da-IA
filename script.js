const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caica-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quem deve ser responsável pela regulamentação da IA no futuro",
        alternativas: [ "Governos e entidades internacionais, Apenas as empresas que desenvolvem IA"],
    },
    {
        enunciado:"A IA deve ser desenvolvida com o foco em quê ",
        alternativas: [ "Melhorar a vida humana e promover o bem-estar, Substituir completamente o trabalho humano"],
    },
    enunciado:" O que é essencial para garantir a vida humana ",
    alternativas: ["Transparência, supervisão e diretrizes claras"],
    {
        enunciado:"A IA pode decidir sobre quesrões políticas no futuro" ,
        alternativas: ["Não, as desicões políticas devem ser tomadas por humanos, Sim, a IA pode escolher líderes e formular políticas"],
    },
    {
        enunciado:"O futuro da Ia depende de quem" , 
        alternativas:["Depende de como a sociedade escolhe utilizá-lá, Depende apenas dos cientistas e engenheiros" ],
    }
]
 let atual = 0;
 let perguntaAtual;

 function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntasAtual.enuciado;
    mostraAlternativas();
 }
 function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        botaoAlternativas.appendChild(botaoAlternativas);
    }
 }
 function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
 }
 function mostraResultado() {
    caixaPerguntas.textContent = "Voce comcluiu o quiz.";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
 }
 mostraPergunta();