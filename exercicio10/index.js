function somarDoisNumeros(numero1, numero2) {
  return numero1 + numero2;
}

function somar() {
  let n1 = Number(document.getElementById("numero1").value);
  let n2 = Number(document.getElementById("numero2").value);

  let total = somarDoisNumeros(n1, n2);

  document.getElementById("resultado").textContent = "Resultado: " + total;
}

function somarNovamente() {
  let n3 = Number(document.getElementById("numero3").value);
  let n4 = Number(document.getElementById("numero4").value);

  let total = somarDoisNumeros(n3, n4);

  document.getElementById("resultado2").textContent =
    "Novo resultado: " + total;
}
