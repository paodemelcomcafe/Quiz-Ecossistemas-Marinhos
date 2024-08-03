const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quais são os principais produtores nos ecossistemas marinhos?",
        alternativas: [
            {
                texto: "A)Algas",
                afirmacao: "Você provavelmente já ouviu falar sobre ecossistemas marinhos e tem algumas informações básicas."
            },
            {
                texto: "B)Corais",
                afirmacao: "Você não sabe muito sobre os ecossistemas marinhos."
            }
        ]
    },
    {
        enunciado: "O que são as zonas abissais nos oceanos?",
        alternativas: [
            {
                texto: "A)Zonas mais profundas e escuras dos oceanos",
                afirmacao: "Acha interessante aprender sobre."
            },
            {
                texto: "B)Zonas mais rasas próximas á costa",
                afirmacao: "Não se aprofunda tanto no assunto."
            }
        ]
    },
    {
        enunciado: "Qual é o animal conhecido como jardineiro dos recifes de coral",
        alternativas: [
            {
                texto: "A)Ouriço-do-mar",
                afirmacao: "Você conhece sobre alguns animais que habitam os ecossistemas marinhos."
            },
            {
                texto: "B)Peixe-palhaço",
                afirmacao: "Você não sabe muito sobre os animais dos ecossistemas marinhos."
            }
        ]
    },
    {
        enunciado: "Qual é o maior ecossistema marinho do mundo?",
        alternativas: [
            {
                texto: "A)Recifes de coral",
                afirmacao: "Uma pessoa curiosa."
            },
            {
                texto: "B)Mar aberto",
                afirmacao: "Uma pessoa nem tanto curiosa mas pode vir a se interessar pelo assunto."
            }
        ]
    },
    {
        enunciado: "O que são as zonas neríticas nos oceanos?",
        alternativas: [
            {
                texto: "A)Zonas costeiras até onde chega a luz solar",
                afirmacao: "Está aberto a aprender mais."
            },
            {
                texto: "B)Zonas profundas com alta pressão atmosférica",
                afirmacao: "Pensa que algumas informações podem não ser necessárias de saber."
            }
        ]
    },
    {
        enunciado: "Qual é o objetivo da bioluminescência em muitos organismos marinhos?",
        alternativas: [
            {
                texto: "A)Atrair presas ou parceiros",
                afirmacao: "Bioluminescência deve ser o seu fenômeno favorito."
            },
            {
                texto: "B)Proteger-se de predadores",
                afirmacao: "Nunca ouviu falar em bioluminescência ou não lembra o que é."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Obrigado por fazer o quiz! ⭒-.⋆🪼⋆.-⭒";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();