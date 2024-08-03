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
                afirmacao: "Básico conhecimento"
            },
            {
                texto: "B)Corais",
                afirmacao: "Pouco conhecimento"
            }
        ]
    },
    {
        enunciado: "O que são as zonas abissais nos oceanos?",
        alternativas: [
            {
                texto: "A)Zonas mais profundas e escuras dos oceanos",
                afirmacao: "Básico conhecimento"
            },
            {
                texto: "B)Zonas mais rasas próximas á costa",
                afirmacao: "Pouco conhecimento"
            }
        ]
    },
    {
        enunciado: "Qual é o animal conhecido como jardineiro dos recifes de coral",
        alternativas: [
            {
                texto: "A)Ouriço-do-mar",
                afirmacao: "Básico conhecimento"
            },
            {
                texto: "B)Peixe-palhaço",
                afirmacao: "Pouco conhecimento"
            }
        ]
    },
    {
        enunciado: "Qual é o maior ecossistema marinho do mundo?",
        alternativas: [
            {
                texto: "A)Recifes de coral",
                afirmacao: "Básico conhecimento"
            },
            {
                texto: "B)Mar aberto",
                afirmacao: "Pouco conhecimento"
            }
        ]
    },
    {
        enunciado: "O que são as zonas neríticas nos oceanos?",
        alternativas: [
            {
                texto: "A)Zonas costeiras até onde chega a luz solar",
                afirmacao: "Básico conhecimento"
            },
            {
                texto: "B)Zonas profundas com alta pressão atmosférica",
                afirmacao: "Pouco conhecimento"
            }
        ]
    },
    {
        enunciado: "Qual é o objetivo da bioluminescência em muitos organismos marinhos?",
        alternativas: [
            {
                texto: "A)Atrair presas ou parceiros",
                afirmacao: "Básico conhecimento"
            },
            {
                texto: "B)Proteger-se de predadores",
                afirmacao: "Pouco conhecimento"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "Se você selecionou a maioria alternativa A, você tem conhecimento básico sobre ecossistemas marinhos ";

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
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

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal = afirmacoes;
    atual++;
    mostraPergunta();
}

mostraPergunta();