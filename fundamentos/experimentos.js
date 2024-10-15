let a = 3; // Declara uma variável local 'a' e a inicializa com o valor 3

global.b = 123; // Define uma variável global 'b' e a inicializa com 123

this.c = 456; // Define uma propriedade 'c' no objeto 'this' (que em Node.js refere-se ao módulo atual)

this.d = false; // Define uma propriedade 'd' no objeto 'this'
this.e = 'teste'; // Define uma propriedade 'e' no objeto 'this'

// Imprime o valor da variável local 'a'
console.log(a); // Saída: 3

// Imprime o valor da variável global 'b'
console.log(global.b); // Saída: 123

// Imprime o valor da propriedade 'c' do objeto 'this'
console.log(this.c); // Saída: 456

// Imprime o valor da propriedade 'c' do objeto 'module.exports'
console.log(module.exports.c); // Saída: 456

// Compara se 'module.exports' é estritamente igual a 'this'
console.log(module.exports === this); // Saída: true (em Node.js, ambos referem-se ao mesmo objeto)

// Imprime o objeto 'module.exports'
console.log(module.exports); // Saída: { c: 456, d: false, e: 'teste' }

// Atribui o valor 3 à variável global 'abc'
abc = 3; // Esta linha cria uma variável global 'abc' (se não estiver em modo estrito)

console.log(global.abc); // Saída: 3
