function mostrarDataAtual() {
  const data = new Date().toLocaleString("pt-BR");
  let elemento = document.getElementById("data");
  elemento.innerHTML = data;
}
