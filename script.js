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
                afirmacao: "afirmação"
            },
            {
                texto: "B)Corais",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "O que são as zonas abissais nos oceanos?",
        alternativas: [
            {
                texto: "A)Zonas mais profundas e escuras dos oceanos",
                afirmacao: "afirmação"
            },
            {
                texto: "B)Zonas mais rasas próximas á costa",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Qual é o animal conhecido como jardineiro dos recifes de coral",
        alternativas: [
            {
                texto: "Ouriço-do-mar",
                afirmacao: "afirmação"
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
                texto: "A)Zonas costeiras até onde chega a luz solar",
                afirmacao: "afirmação"
            },
            {
                texto: "B)Zonas profundas com alta pressão atmosférica",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Qual é o objetivo da bioluminescência em muitos organismos marinhos?",
        alternativas: [
            {
                texto: "A)Atrair presas ou parceiros",
                afirmacao: "afirmação"
            },
            {
                texto: "B)Proteger-se de predadores",
                afirmacao: "afirmação"
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