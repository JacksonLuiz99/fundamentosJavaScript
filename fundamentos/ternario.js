// Define uma função que recebe a nota e retorna 'Aprovado' se a nota for maior ou igual a 7, ou 'Reprovado' caso contrário
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado';

// Testa a função com uma nota maior que 7
console.log(resultado(7.1)); // Saída: 'Aprovado'

// Testa a função com uma nota menor que 7
console.log(resultado(6.7)); // Saída: 'Reprovado'
