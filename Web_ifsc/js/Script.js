<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de IMC</title>
</head>
<body>
    <div>
        <label for="idPeso">Peso (kg)</label>
        <input type="text" id="idPeso">
        <br>
        <label for="idAltura">Altura (m)</label>
        <input type="text" id="idAltura">
        <button id="botao">Calcular</button>
        <p id="resultado"></p>
        <img id="imagemImc" alt="Classificação do IMC" width="200" height="400" style="display: none;">
    </div>

    <script src="script.js"></script>
</body>
</html>


const botao = document.getElementById("botao");

botao.addEventListener("click", function () {
    const peso = parseFloat(document.getElementById("idPeso").value.replace(",", "."));
    const altura = parseFloat(document.getElementById("idAltura").value.replace(",", "."));
    const resultado = document.getElementById("resultado");
    const imagem = document.getElementById("imagemImc");

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultado.textContent = "Preencha peso e altura com valores válidos.";
        imagem.style.display = "none";
        return;
    }

    const imc = peso / (altura * altura);

    let classificacao;
    let arquivo;

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
        arquivo = "abaixopeso.png";
    } else if (imc < 25) {
        classificacao = "Peso normal";
        arquivo = "normal.png";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
        arquivo = "sobrepeso.png";
    } else if (imc < 35) {
        classificacao = "Obesidade grau I";
        arquivo = "obesidade1.png";
    } else if (imc < 40) {
        classificacao = "Obesidade grau II";
        arquivo = "obesidade2.png";
    } else {
        classificacao = "Obesidade grau III";
        arquivo = "obesidade3.png";
    }

    resultado.textContent = "Seu IMC é " + imc.toFixed(2) + " (" + classificacao + ")";

    imagem.src = "images/" + arquivo;
    imagem.style.display = "block";
});
