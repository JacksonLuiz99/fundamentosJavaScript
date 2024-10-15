function rand([min = 0, max = 1000]){
    if (min > max) [min, max] = [max, min]; // Troca min e max se min for maior que max
    const valor = Math.random() * (max - min) + min; // Calcula um número aleatório entre min e max
    return Math.floor(valor); // Retorna o valor arredondado para baixo
}

console.log(rand([50, 40])); // Exemplo de uso: gera um número aleatório entre 40 e 50 (mas o código inverte esses valores)
console.log(rand([992])); // Exemplo de uso: gera um número aleatório entre 0 e 992 (com min padrão)
console.log(rand([, 10])); // Exemplo de uso: gera um número aleatório entre 0 e 10 (com max padrão)
console.log(rand([])); // Exemplo de uso: gera um número aleatório entre 0 e 1000 (com min e max padrão)
