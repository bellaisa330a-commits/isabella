function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function classificarIMC(imc) {
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc < 25) {
    return "Peso normal";
  } else if (imc < 30) {
    return "Sobrepeso";
  } else {
    return "Obesidade";
  }
}

function mostrarIMC() {
  const peso = Number(document.getElementById("peso").value);
  const altura = Number(document.getElementById("altura").value);

  const imc = calcularIMC(peso, altura);
  const classificacao = classificarIMC(imc);

  document.getElementById("resultado").textContent =
    `Seu IMC é ${imc.toFixed(2)} — ${classificacao}`;
}
