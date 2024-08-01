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
                texto: "Algas",
                afirmacao: "afirmação"
            },
            {
                texto: "Corais",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "O que são as zonas abissais nos oceanos?",
        alternativas: [
            {
                texto: "Zonas mais rasas próximas á costa",
                afirmacao: "afirmação"
            },
            {
                texto: "Zonas mais profundas e escuras do oceanos",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Qual é o animal conhecido como jardineiro dos recifes de coral",
        alternativas: [
            {
                texto: "Ouriço-do-mar",
                afirmacao: ""
            },
            {
                texto: "Peixe-palhaço",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Qual é o maior ecossistema marinho do mundo?",
        alternativas: [
            {
                texto: "Recifes de coral",
                afirmacao: "afirmação"
            },
            {
                texto: "Mar aberto",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "O que são as zonas neríticas nos oceanos?",
        alternativas: [
            {
                texto: "Zonas profundas com alta pressão atmosférica",
                afirmacao: "afirmação"
            },
            {
                texto: "Zonas costeiras até onde chega a luz solar",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Qual é o objetivo da bioluminescência em muitos organismos marinhos?",
        alternativas: [
            {
                texto: "Atrair presas ou parceiros",
                afirmacao: "afirmação"
            },
            {
                texto: "Proteger-se de predadores",
                afirmacao: "afirmação"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

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