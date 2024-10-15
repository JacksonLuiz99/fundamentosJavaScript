const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2); // Saída: 1 2
console.log(Number.isInteger(peso1)); // Saída: true
console.log(Number.isInteger(peso2)); // Saída: true

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); // Saída: 7.84
console.log(media.toString(2)); // Saída: Representação binária da média
console.log(typeof media); // Saída: number
console.log(typeof Number); // Saída: function
