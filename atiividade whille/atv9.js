// exercicio 9

let numero = 67;
let divisores = 0;
console.log(`Número inicial: ${numero}`);
while (numero > 1) {
  numero /= 2;
  divisores++;
}
console.log(`Foram realizadas ${divisores} divisões.`);
