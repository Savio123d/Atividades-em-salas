const nome = document.getElementById('nome');
const idade = document.getElementById('idade');
const localNascimento = document.getElementById('localNascimento');
const telefone = document.getElementById('telefone');
const botao = document.getElementById('botao');

botao.addEventListener('click', function () {
    console.log(idade.value); 

    const obj = {
        nome: nome.value,
        idade: idade.value,
        localNascimento: localNascimento.value,
        telefone: telefone.value
    };
    transformaJson(obj);
});

function transformaJson(obj) {
    let div = document.getElementById('conteudo');
    let p = document.createElement('p');

    //stringify - converte em json.
    let JsonObjeto = JSON.stringify(obj);
    p.textContent = obj;
    div.appendChild(p);
}
