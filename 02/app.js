/* rozwiązanie z pętlą for */
// const x = prompt('Podaj liczbę!')
const x = 3;

if (x > 0 && x <= 10 && isNaN(x) !== true) {

    for (let i = 1; i <= 10; i++) {
        console.log(`${i} x ${x} = ${i * x}`)
    }
} else {
    console.log('Podaj liczbe z przedzialu 1 - 10')
}

/* rozwiązanie z pętlą while  */

const a = 7;
const n = 2;
let suma = a;
let i = 1;
let wynik = a;

while (i < n) {
    suma *= a;
    i++;
    wynik += ` * ${a}`

}
console.log(`${a} do potęgi ${n} wynosi: ${wynik} = ${suma}`);