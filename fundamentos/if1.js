// Função que imprime uma mensagem se a nota for maior ou igual a 7
function soBoaNoticia(nota) {
    // Verifica se a nota é maior ou igual a 7
    if (nota >= 7) {
        // Se a condição for verdadeira, imprime 'aprovado com' seguido da nota
        console.log('aprovado com ' + nota);
    }
}

// Chamada da função com a nota 8.1, que é maior que 7
soBoaNoticia(8.1); // Imprime: aprovado com 8.1
// Chamada da função com a nota 6.1, que é menor que 7
soBoaNoticia(6.1); // Não imprime nada, pois a condição não é atendida

// Função que imprime uma mensagem se o valor for considerado verdadeiro
function seForVerdadeEufalo(valor) {
    // Verifica se o valor é considerado verdadeiro
    if (valor) {
        // Se a condição for verdadeira, imprime 'É Verdade...' seguido do valor
        console.log('É Verdade...' + valor);
    }
}

// Chamadas da função com diferentes valores para verificar o comportamento
seForVerdadeEufalo(); // Não imprime nada, pois o valor é undefined
seForVerdadeEufalo(null); // Não imprime nada, pois o valor é null
seForVerdadeEufalo(undefined); // Não imprime nada, pois o valor é undefined
seForVerdadeEufalo(NaN); // Não imprime nada, pois NaN é considerado falso
seForVerdadeEufalo(''); // Não imprime nada, pois string vazia é considerada falsa
seForVerdadeEufalo(0); // Não imprime nada, pois 0 é considerado falso
seForVerdadeEufalo(-1); // Imprime: É Verdade...-1, pois -1 é considerado verdadeiro
seForVerdadeEufalo(' '); // Imprime: É Verdade... , pois uma string com espaço é considerada verdadeira
seForVerdadeEufalo('?'); // Imprime: É Verdade...? , pois uma string não vazia é considerada verdadeira
seForVerdadeEufalo([]); // Não imprime nada, pois array vazio é considerado falso
seForVerdadeEufalo([1, 2]); // Imprime: É Verdade..., pois array não vazio é considerado verdadeiro
seForVerdadeEufalo({}); // Imprime: É Verdade..., pois objeto não vazio é considerado verdadeiro
