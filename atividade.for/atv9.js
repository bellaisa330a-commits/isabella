//9. Conte quantos números de 1 a 200 são múltiplos de 7.

let contador = 0 ;

for (let i = 1 ; i <= 200; i++){
    if (i % 7 == 0){
        contador ++;
    }
}
console.log(contador);