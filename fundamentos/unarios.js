let num1 = 1; // Inicializa a variável num1 com o valor 1
let num2 = 2; // Inicializa a variável num2 com o valor 2

num1++; // Incrementa num1 em 1 (num1 agora é 2)
console.log(num1); // Imprime o valor de num1, que agora é 2

--num1; // Decrementa num1 em 1 (num1 agora volta a ser 1)
console.log(num1); // Imprime o valor de num1, que agora é 1 novamente

// Compara o valor incrementado de num1 com o valor de num2 antes de decrementá-lo
console.log(++num1 === num2--); // Incrementa num1 (agora é 2) e compara com num2 (2). Resulta em true.
// num2 agora se torna 1 após a comparação.

console.log(num1 === num2); // Compara num1 (2) com num2 (1). Resulta em false.
