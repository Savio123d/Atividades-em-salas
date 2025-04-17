document.getElementById('formAgendamento').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const escolhas = document.getElementById('escolhas').value;
    const data = document.getElementById('data').value;
    const tu = document.getElementById('tu').value;

    let tipo = null;

    if (escolhas == 1) tipo = " rj";
    else if (escolhas == 2) tipo = " pr";
    else if (escolhas == 3) tipo = " xd";

    if (tu == 1) tuu = "Sim";
    

    const resumo = `
      <div class="alert alert-primary">
        <h5>Atendimento confirmado!</h5>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>idade:</strong> ${idade}</p>
         <p><strong>escolhas:</strong>${tipo}</p>
        <p><strong>Data:</strong> ${data}</p>
        <p><strong>Tu é ? </strong> ${tuu}</p>
      </div>
    `;

    document.getElementById('resumo').innerHTML = resumo;
});
