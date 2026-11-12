//exercicio 7 
const input = document.getElementById("input");
const botao = document.getElementById("botão");
const resposta = document.getElementById("resposta");

botao.addEventListener("click", () => {
  const n = input.value;
  resposta.innerHTML = "";
  /*
    for (let i = 1 ; i <=10;i++){
        resposta.innerHTML += `${n}X ${i} = ${n*i}<br>`;
    }
    */
  let mult = 1;

  for (let i = n; i > 0; i--) {
  
    mult *= i;
  }
  resposta.innerHTML += `O resultado é ${mult}`;
});
