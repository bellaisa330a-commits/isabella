//13. Mostre "Fizz" para múltiplos de 3, "Buzz" para múltiplos de 5 e "FizzBuzz" para ambos, de 1 a
//30; nos demais, o próprio número.

for (let i = 1 ;i<= 30; i++ ){
    if (i % 3 == 0 && i % 5 == 0)
{
    console.log("FizzBuzz");
} else if ( i % 3==0){
    console.log("Fizz");
} else if (i % 5 == 0){
    console.log("Buzz");
} else{
    console.log(i);
}}