//8. Peça um número N e mostre a tabuada do N (de 1 a 10), no formato N x 1 = ... .

let n = 5
for (let i = 1; i <= 10; i++) {
    console.log(n + "X" + i + " = " + (n*i));
}