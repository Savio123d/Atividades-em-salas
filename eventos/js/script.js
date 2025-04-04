const botao = document.getElementById('butao');

const resposta = document.getElementById('resposta');

const evento = document.getElementById('evento');

botao.addEventListener('click',imprimir);

botao.addEventListener('mousemove',
    function (){
        resposta.innerText = "Vocé clicou né boiola";
    }
);

botao.addEventListener('mouseout',
    function (){
        resposta.innerText = "voce passou em min";
    }
)

botao.addEventListener('mousemove',
    function (){
        evento.innerHTML =` <h1> Voce foi invadido; </h1> 
        `
    }
)
function imprimir(){
    resposta.innerText = "Perdeu playboy  ";
};