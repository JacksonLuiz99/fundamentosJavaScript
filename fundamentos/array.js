const valores = [7.5, 9.9, 9.5, 98.9, 8.1, 7.5, 8, 4, 6, 48.5, 19.4];

console.log(valores[0], valores[3]); // Saída: 7.5 98.9
console.log(valores[4]); // Saída: 8.1

valores[4] = 10; // Altera o valor na posição 4 para 10
console.log(valores.length); // Saída: 11 (número de elementos no array)

valores.push({id: 3}, false, null, 'teste'); // Adiciona novos elementos ao final do array
console.log(valores);

console.log(valores.pop()); // Remove o último elemento do array e o imprime
delete valores[0]; // Remove o elemento na posição 0 do array
console.log(valores);
console.log(typeof valores); // Retorna o tipo de dados do array (que é um objeto)
