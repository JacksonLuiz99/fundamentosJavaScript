// Função anônima atribuída à constante imprimirResultado, que avalia a nota
const imprimirResultado = function(nota) {
    // Verifica se a nota é maior ou igual a 7
    if (nota >= 7) {
        console.log('Aprovado'); // Se a condição for verdadeira, imprime 'Aprovado'
    } else {
        console.log('Reprovado'); // Se a condição for falsa, imprime 'Reprovado'
    }
}

// Chamada da função com a nota 9, que atende à condição
imprimirResultado(9); // Imprime: Aprovado

// Chamada da função com a nota 6, que não atende à condição
imprimirResultado(6); // Imprime: Reprovado

// Chamada da função com uma string, que será avaliada como verdadeira
imprimirResultado('Epa! to louco'); // Imprime: Aprovado (pois a string não vazia é considerada verdadeira)
