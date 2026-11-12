function verificarPar() {
    const num = document.getElementById("num").value;

    if (num % 2 == 0) {
        document.getElementById("resultado").textContent = "Par";
    } else {
        document.getElementById("resultado").textContent = "Ímpar";
    }
}