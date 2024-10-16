// Função para imprimir o resultado com base na nota
const imprimirResultado = function (nota) {
    // Usa switch para verificar o valor inteiro da nota
    switch (Math.floor(nota)) {
        // Caso a nota seja 10 ou 9
        case 10:
        case 9:
            console.log('Quadro de Honra'); // Imprime 'Quadro de Honra'
            break; // Interrompe a execução do switch
        // Caso a nota seja 8 ou 7
        case 8:
        case 7:
            console.log('Aprovado'); // Imprime 'Aprovado'
            break; // Interrompe a execução do switch
        // Caso a nota seja 6, 5 ou 4
        case 6:
        case 5:
        case 4:
            console.log('Recuperação'); // Imprime 'Recuperação'
            break; // Interrompe a execução do switch
        // Caso a nota seja 3, 2, 1 ou 0
        case 3:
        case 2:
        case 1:
        case 0:
            console.log('Reprovado'); // Imprime 'Reprovado'
            break; // Interrompe a execução do switch
        // Para qualquer outro valor (notas inválidas)
        default:
            console.log('Nota Invalida'); // Imprime 'Nota Invalida'
    }
    console.log('fim'); // Imprime 'fim' ao final de cada chamada da função
}

// Chamada da função com diferentes notas
imprimirResultado(10);   // Imprime: Quadro de Honra \n fim
imprimirResultado(8.9);  // Imprime: Quadro de Honra \n fim (Math.floor(8.9) é 8)
imprimirResultado(6.55); // Imprime: Recuperação \n fim (Math.floor(6.55) é 6)
imprimirResultado(2.3);  // Imprime: Reprovado \n fim (Math.floor(2.3) é 2)
imprimirResultado(-1);   // Imprime: Nota Invalida \n fim
imprimirResultado(11);   // Imprime: Nota Invalida \n fim
imprimirResultado(7);    // Imprime: Aprovado \n fim
