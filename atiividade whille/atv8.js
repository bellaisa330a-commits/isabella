let saldo = 1000 ;
let mes = 0 ;
while (saldo <= 2000){
    saldo *= 1.10;
    mes++;
}
console.log(`O saldo passado de R$ 2000 em ${mes} meses.Saldo Final:${saldo}`)