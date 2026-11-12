//14. Descubra o maior e o menor valor entre os números 1 a 10 elevados ao quadrado (use
//Math.max / Math.min ou comparações).

let menorNumero = 11;
let maiorNumero = 0;

for (let i = 1; i <= 10; i++) {
  if (i ** 2 > maiorNumero) {
    maiorNumero = i ** 2;
  }
  if (i ** 2 < menorNumero) {
    menorNumero = i ** 2;
  }
}
console.log(`Maior número: ${maiorNumero}`);
console.log(`Menor número: ${menorNumero}`);
