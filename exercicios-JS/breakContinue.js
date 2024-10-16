// Define um array de números de 1 a 10
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Primeiro loop que itera sobre os índices do array 'nums'
for (x in nums) {
    // Se o índice for 5, sai do loop
    if (x == 5) {
        break;
    }
    // Imprime o índice e o valor correspondente no array
    console.log(`${x} = ${nums[x]}`);
}

// Segundo loop que itera sobre os índices do array 'nums'
for (y in nums) {
    // Se o índice for 5, pula para a próxima iteração
    if (y == 5) {
        continue;
    }
    // Imprime o índice e o valor correspondente no array
    console.log(`${y} = ${nums[y]}`);
}

// Loop externo que permite quebrar ambos os loops aninhados
externo: for (a in nums) {
    for (b in nums) {
        // Se a combinação de índices for (2, 3), sai do loop externo
        if (a == 2 && b == 3) break externo;
        // Imprime o par de índices
        console.log(`Par = ${a}, ${b}`);
    }
}

// Imprime 'fim' ao final da execução dos loops
console.log('fim');
