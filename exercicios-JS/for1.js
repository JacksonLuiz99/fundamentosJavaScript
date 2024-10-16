let contador = 1; // Inicializa a variável contador com 1

// Loop while que continua enquanto contador for menor ou igual a 10
while (contador <= 10) {
    console.log(`contador = ${contador}`); // Imprime o valor atual do contador
    contador++; // Incrementa o contador em 1
}

// Loop for que itera de 1 até 10
for (let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`); // Imprime o valor atual de i
}

// Declaração de um array com notas
const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

// Loop for que itera sobre os índices do array 'notas'
for (let i = 0; i < notas.length; i++) {
    console.log(`nota = ${notas[i]}`); // Imprime a nota correspondente ao índice i
}
