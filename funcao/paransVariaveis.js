// Definindo a função 'soma'
function soma() {
    let soma = 0; // Inicializa a variável 'soma' com 0

    // Percorre os argumentos passados para a função
    for (i in arguments) {
        soma += arguments[i]; // Adiciona cada argumento à variável 'soma'
    }

    return soma; // Retorna o valor total da soma
}

// Chamadas para a função 'soma' com diferentes argumentos
console.log(soma()); // Chamada sem argumentos. Saída: 0

console.log(soma(1)); // Chamada com um argumento. Saída: 1

console.log(soma(1.1, 2.2, 3.3)); // Chamada com três argumentos. Saída: 6.6 (1.1 + 2.2 + 3.3)

console.log(soma(' a ', 'b ', 'c ', "teste")); // Chamada com strings. Saída: " a b c teste" (strings concatenadas)
