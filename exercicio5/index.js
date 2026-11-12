function saudacaoComNome() {
  const nome = document.getElementById("nome").value;

  document.getElementById("resultado").textContent = "Olá, " + nome + "!";
}
