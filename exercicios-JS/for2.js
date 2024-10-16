// Define um array com notas
const notas = [6.7, 7.4, 9.8, 8.1, 7.7, 92.5, 114.99];

// Loop para iterar sobre os índices do array 'notas'
for (let i in notas) {
    // Imprime o índice (i) e o valor correspondente no array (notas[i])
    console.log(i, notas[i]);
}

// Define um objeto 'pessoa' com propriedades como nome, sobrenome, idade e peso
const pessoa = {
    nome: 'Jackson',
    sobrenome: 'Luiz',
    idade: 29,
    peso: 64
};

// Loop para iterar sobre as chaves do objeto 'pessoa'
for (let atributo in pessoa) {
    // Imprime cada atributo e seu valor correspondente no objeto
    console.log(`${atributo} = ${pessoa[atributo]}`);
}
