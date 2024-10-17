// Definindo a função 'area' que calcula a área de um retângulo
function area(largura, altura) {
    const area = largura * altura; // Calcula a área multiplicando largura por altura

    // Verifica se a área é maior que 20
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area} m².`); // Exibe uma mensagem se a área exceder 20 m²
    } else {
        return area; // Retorna a área se for menor ou igual a 20
    }
}

// Chamadas para a função 'area' com diferentes argumentos
console.log(area(2, 2)); // Saída: 4 (2 * 2) - retorna 4
console.log(area(2)); // Saída: NaN - altura não foi fornecida, resultado é NaN (Not a Number)
console.log(area()); // Saída: NaN - largura e altura não foram fornecidas, resultado é NaN
console.log(area(2, 3, 40, 22, 78)); // Saída: 6 (2 * 3) - ignora os argumentos extras e retorna 6
console.log(area(5, 5)); // Saída: "Valor acima do permitido: 25 m²." - não retorna, apenas exibe a mensagem
