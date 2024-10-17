// Estratégia 1: Usando o operador lógico OR (||)
function soma1(a, b, c) {
    // Se 'a', 'b' ou 'c' forem falsy (incluindo 0), atribui 1
    a = a || 1; 
    b = b || 1; 
    c = c || 1; 
    return a + b + c; // Retorna a soma dos parâmetros
}

// Testes da Estratégia 1
console.log(soma1());            // Saída: 3 (1 + 1 + 1)
console.log(soma1(3));           // Saída: 5 (3 + 1 + 1)
console.log(soma1(1, 2, 3));     // Saída: 6 (1 + 2 + 3)
console.log(soma1(0, 0, 0));     // Saída: 3 (1 + 1 + 1)

// Estratégia 2: Usando verificações explícitas
function soma2(a, b, c) {
    // Se 'a' for undefined, atribui 1
    a = a !== undefined ? a : 1; 
    // Verifica se 'b' foi passado
    b = 1 in arguments ? b : 1; 
    // Se 'c' for NaN, atribui 1
    c = isNaN(c) ? 1 : c; 
    return a + b + c; // Retorna a soma dos parâmetros
}

// Testes da Estratégia 2
console.log(soma2());            // Saída: 3 (1 + 1 + 1)
console.log(soma2(3));           // Saída: 5 (3 + 1 + 1)
console.log(soma2(1, 2, 3));     // Saída: 6 (1 + 2 + 3)
console.log(soma2(0, 0, 0));     // Saída: 0 (0 + 0 + 0)

// Estratégia 3: Valores padrão do ES2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c; // Retorna a soma dos parâmetros
}

// Testes da Estratégia 3
console.log(soma3());            // Saída: 3 (1 + 1 + 1)
console.log(soma3(3));           // Saída: 5 (3 + 1 + 1)
console.log(soma3(1, 2, 3));     // Saída: 6 (1 + 2 + 3)
console.log(soma3(0, 0, 0));     // Saída: 0 (0 + 0 + 0)
