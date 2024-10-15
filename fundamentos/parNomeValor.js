// Definição da constante saudacao com o valor 'opa'
const saudacao = 'opa';

// Definição de uma função exec(), que retorna uma saudação específica
function exec() {
    // Declaração de uma constante saudacao local dentro da função com o valor 'falaaa'
    const saudacao = 'falaaa';
    // Retorna o valor da constante saudacao local
    return saudacao;
}

// Definição de um objeto cliente com várias propriedades
const cliente = {
    nome: 'Jackson',
    idade: 26,
    peso: 97,
    endereco: {
        logradouro: 'Rua Santamaria',
        numero: 91
    }
};

// Impressão no console do valor da constante saudacao (fora da função)
console.log(saudacao); // Saída: opa

// Chamada da função exec() e impressão no console do valor retornado pela função
console.log(exec());   // Saída: falaaa

// Impressão no console do objeto cliente
console.log(cliente);  // Saída: Objeto cliente com suas propriedades
