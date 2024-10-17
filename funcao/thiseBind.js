const pessoa = {
    saudacao: 'Tudo bem?', // Propriedade 'saudacao' do objeto 'pessoa'.
    
    // Método 'falar' que imprime a saudação.
    falar() {
        console.log(this.saudacao); // 'this' refere-se ao objeto 'pessoa', acessando 'saudacao'.
    }
};

// Chamada do método 'falar' diretamente do objeto 'pessoa'.
pessoa.falar(); // Imprime: Tudo bem?

const falar = pessoa.falar; // Atribui o método 'falar' a uma nova variável chamada 'falar'.
falar(); // Chamada sem contexto, 'this' é undefined, resultando em erro ou 'undefined'.

// Usando 'bind' para garantir que 'this' dentro de 'falar' se refira a 'pessoa'.
const falarDePessoa = pessoa.falar.bind(pessoa); // 'bind' fixa o contexto do método.
falarDePessoa(); // Chamada do novo método, imprime: Tudo bem?
