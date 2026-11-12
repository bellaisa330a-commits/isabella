function calcularMedia(nota1, nota2) {
  return (nota1 + nota2) / 2;
}

function mostrarMedia() {
  const nota1 = Number(document.getElementById("nota1").value);
  const nota2 = Number(document.getElementById("nota2").value);

  const media = calcularMedia(nota1, nota2);

  if (media >= 7) {
    document.getElementById("resultado").textContent =
      `Média: ${media.toFixed(1)} - Aprovado`;
  } else if (media >= 5) {
    document.getElementById("resultado").textContent =
      `Média: ${media.toFixed(1)} - Recuperação`;
  } else {
    document.getElementById("resultado").textContent =
      `Média: ${media.toFixed(1)} - Reprovado`;
  }
}
