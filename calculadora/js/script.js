function somar(){
    let entrada1 =
    parseFloat(document.getElementById("entrada1").value);

    let entrada2 = parseFloat(document.getElementById("entrada2").value);

    let resultado = entrada1 + entrada2;
    document.getElementById("resultado").textContent = resultado;
}

function menos(){
    let entrada1 =
    parseFloat(document.getElementById("entrada1").value);

    let entrada2 = parseFloat(document.getElementById("entrada2").value);

    let resultado = entrada1 - entrada2;
    document.getElementById("resultado").textContent = resultado;
}

function vezes(){
    let entrada1 =
    parseFloat(document.getElementById("entrada1").value);

    let entrada2 = parseFloat(document.getElementById("entrada2").value);

    let resultado = entrada1 * entrada2;
    document.getElementById("resultado").textContent = resultado;
}

function dividi(){
    let entrada1 =
    parseFloat(document.getElementById("entrada1").value);

    let entrada2 = parseFloat(document.getElementById("entrada2").value);

    let resultado = entrada1 / entrada2;
    document.getElementById("resultado").textContent = resultado;
}