const botao = document.getElementById('add');
const entrada = document.getElementById('entrada');
const lista = document.getElementById('lista');

const items = []; 

botao.addEventListener('click',
    function () {
        let ValorInput = entrada.value;
        items.push(ValorInput);
        atualizar();

    }

)
function atualizar(){
    lista.innerHTML = null;
    let li = document.createElement("li");
    li.textContent = "Deu certo";
    lista.appendChild(li);

}