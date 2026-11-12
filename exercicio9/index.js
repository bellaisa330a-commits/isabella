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
  const peso1 = Number(document.getElementById("peso1").value);
  const altura1 = Number(document.getElementById("altura1").value);

  const peso2 = Number(document.getElementById("peso2").value);
  const altura2 = Number(document.getElementById("altura2").value);

  const imc1 = calcularIMC(peso1, altura1);
  const imc2 = calcularIMC(peso2, altura2);

  const classificacao1 = classificarIMC(imc1);
  const classificacao2 = classificarIMC(imc2);

  document.getElementById("resultado").innerHTML =
    `Primeiro IMC: ${imc1.toFixed(2)} — ${classificacao1}<br>
     Segundo IMC: ${imc2.toFixed(2)} — ${classificacao2}`;
}
