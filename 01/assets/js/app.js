const a = '4.2';
const b = 9;

console.log(a, b);

const typA = typeof (a);
const typB = typeof (b);

console.log(typA, typB)

const c = parseFloat(a);

const plus = c + b;
const minus = c - b;
const mnozenie = c * b;
const dzielenie = c / b;

console.log(plus, minus, mnozenie.toFixed(2), dzielenie.toFixed(2));