function compras(trabalho1, trabalho2) {
    // Determina se pode comprar sorvete (se pelo menos um dos trabalhos for verdadeiro)
    const comprarSorvete = trabalho1 || trabalho2;

    // Determina se pode comprar uma TV de 50" (se ambos os trabalhos forem verdadeiros)
    const comprarTv50 = trabalho1 && trabalho2;

    // Determina se pode comprar uma TV de 30" (se apenas um dos trabalhos for verdadeiro)
    // O operador XOR (^) não é utilizado diretamente, então uma comparação de desigualdade é feita
    const comprarTv30 = trabalho1 != trabalho2;

    // Mantém a saúde (não comprar sorvete)
    const manterSaudavel = !comprarSorvete; // operador unário para negação

    // Retorna um objeto com as decisões de compras
    return { comprarSorvete, comprarTv30, comprarTv50, manterSaudavel };
}

// Testa a função com diferentes combinações de trabalho1 e trabalho2
console.log(compras(true, true));   // Ambos os trabalhos verdadeiros
console.log(compras(true, false));  // Apenas o trabalho1 verdadeiro
console.log(compras(false, true));  // Apenas o trabalho2 verdadeiro
console.log(compras(false, false)); // Nenhum trabalho verdadeiro
