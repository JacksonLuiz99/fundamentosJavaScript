const pessoa = {
    nome: 'jackson',
    idade: 27,
    endereco:{
        logradouro: 'santa maria',
        numero: 91
    },
    conta:{
        ag: 22000,
        num: 44646
    }
};

// Extraindo nome e idade diretamente de pessoa
const { nome, idade } = pessoa;
console.log(nome, idade); // Saída: jackson 27

// Extraindo nome como 'J' e idade como 'i'
const { nome: J, idade: i } = pessoa;
console.log(J, i); // Saída: jackson 27

// Tentando extrair propriedades que não existem
const { sobrenome, carro = true } = pessoa;
console.log(sobrenome, carro); // Saída: undefined true

// Extraindo logradouro, numero e cep de endereco
const { endereco: { logradouro, numero, cep } } = pessoa;
console.log(logradouro, numero, cep); // Saída: santa maria 91 undefined (cep não está definido)

// Extraindo ag e num de conta
const { conta: { ag, num } } = pessoa;
console.log(ag, num); // Saída: 22000 44646
