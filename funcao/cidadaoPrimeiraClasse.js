// Uma função em JavaScript é um objeto de primeira classe (First-Class Citizen)
// Isso significa que funções podem ser tratadas como qualquer outro valor: 
// podem ser atribuídas a variáveis, passadas como argumentos e retornadas de outras funções.

// Definindo uma função de forma literal
function fun1() {
    // Esta função não faz nada por enquanto
}

// Armazenando uma função anônima em uma variável
const fun2 = function() {
    // Esta função também não faz nada por enquanto
};

// Armazenando funções em um array
const array = [
    function(a, b, c) { return a + b * c }, // Uma função que retorna o resultado de a + (b * c)
    fun1, // Referência à função fun1
    fun2  // Referência à função fun2
];

// Chamando a primeira função do array com os argumentos 2, 5 e 2
// Resultado: 2 + (5 * 2) = 12
console.log(array[0](2, 5, 2));

// Armazenando uma função como atributo de um objeto
const obj = {};
obj.falar = function() { return 'Jackson'; }; // Método 'falar' que retorna a string 'Jackson'

// Chamando o método 'falar' do objeto e exibindo o resultado
console.log(obj.falar()); // Saída: 'Jackson'

// Função que aceita outra função como parâmetro
function run(fun) {
    fun(); // Executa a função passada como argumento
}

// Passando uma função anônima para ser executada
run(function() {
    console.log('Executando...'); // Saída: 'Executando...'
});

// Uma função pode retornar outra função
function soma(a, b) {
    // Retorna uma nova função que aceita um argumento 'c'
    return function(c) {
        // Quando chamada, a nova função calcula e exibe a soma de a, b e c
        console.log(a + b + c); // Exibe a soma
    };
}

// Chamando a função soma com 2 e 3, e em seguida chamando a função retornada com 77
soma(2, 3)(77); // Saída: 2 + 3 + 77 = 82
