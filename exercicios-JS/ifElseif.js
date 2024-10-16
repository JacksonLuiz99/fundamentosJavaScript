// Adiciona um método ao prototype de Number para verificar se um número está dentro de um intervalo
Number.prototype.entre = function (inicio, fim) {
    // Retorna true se o número atual estiver entre 'inicio' e 'fim' (inclusive)
    return this >= inicio && this <= fim;
}

// Função para imprimir o resultado com base na nota
const imprimirResultado = function(nota) {
    // Verifica se a nota está entre 9 e 10
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honra'); // Imprime 'Quadro de Honra' se a nota for 9 ou 10
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado'); // Imprime 'Aprovado' se a nota estiver entre 7 e 8.99
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação'); // Imprime 'Recuperação' se a nota estiver entre 4 e 6.99
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado'); // Imprime 'Reprovado' se a nota estiver entre 0 e 3.99
    } else {
        console.log('Nota inválida'); // Imprime 'Nota inválida' se a nota não se enquadrar em nenhum dos intervalos
    }
    console.log('fim'); // Imprime 'fim' ao final de cada chamada da função
}

// Chamada da função com diferentes notas
imprimirResultado(10);   // Imprime: Quadro de Honra \n fim
imprimirResultado(8.9);  // Imprime: Aprovado \n fim
imprimirResultado(6.55); // Imprime: Recuperação \n fim
imprimirResultado(2.3);  // Imprime: Reprovado \n fim
imprimirResultado(-1);   // Imprime: Nota inválida \n fim
imprimirResultado(11);    // Imprime: Nota inválida \n fim
