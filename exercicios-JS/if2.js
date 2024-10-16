// Função que imprime o número se ele for maior que 7 e sempre imprime 'Final'
function teste1(num) {
    // Verifica se o número é maior que 7
    if (num > 7)
        console.log(num); // Se a condição for verdadeira, imprime o número
    console.log('Final'); // Esta linha sempre será executada, independentemente da condição
}

// Chamada da função com o número 6, que não atende à condição
teste1(6); // Imprime: Final
// Chamada da função com o número 8, que atende à condição
teste1(8); // Imprime: 8 \n Final

// Função que imprime o número se ele for maior que 7
function teste2(num) {
    // Verifica se o número é maior que 7
    if (num > 7) {
        console.log(num); // Se a condição for verdadeira, imprime o número
    }
    // Não há uma linha de código após a verificação, então não imprime 'Final'
}

// Chamada da função com o número 6, que não atende à condição
teste2(6); // Não imprime nada
// Chamada da função com o número 8, que atende à condição
teste2(8); // Imprime: 8
