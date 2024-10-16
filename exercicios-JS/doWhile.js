// Função para gerar um número inteiro aleatório entre 'min' e 'max'
function getInteiroAleatorioEntre(min, max) {
    // Gera um valor aleatório entre min (inclusive) e max (exclusive)
    const valor = Math.random() * (max - min) + min;
    // Retorna o valor arredondado para baixo, transformando em um inteiro
    return Math.floor(valor);
}

let opcao = -1; // Inicializa a variável opcao com -1

// Estrutura do do-while que executa o bloco de código pelo menos uma vez
do {
    // Gera uma nova opção aleatória entre -1 e 9 (0 a 9)
    opcao = getInteiroAleatorioEntre(-1, 10);
    // Imprime a opção escolhida
    console.log(`Opção escolhida foi ${opcao}.`);
} while (opcao != -1); // Continua enquanto a opção não for -1

// Mensagem final que será impressa quando o loop terminar
console.log('Até a próxima, meu amigo!');
