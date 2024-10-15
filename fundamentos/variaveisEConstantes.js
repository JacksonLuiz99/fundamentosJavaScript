var a = 3;
let b = 4;

var a = 30; // Reatribuição válida usando var
b = 40;     // Reatribuição válida usando let

console.log(a, b); // Saída: 30 40

a = 300; // Atribuição válida após a declaração inicial usando var
b = 400; // Atribuição válida após a declaração inicial usando let

console.log(a, b); // Saída: 300 400

const c = 5; // Declaração e atribuição de uma constante

// Tentativa inválida de reatribuir uma constante (gera erro)
// c = 50;

console.log(c); // Saída: 5
