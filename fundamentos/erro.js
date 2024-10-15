// Função que trata um erro e lança um novo objeto de erro personalizado
function tratarErroELancar(erro) {
    // Exemplo de como lançar diferentes tipos de erros
    // throw new Error("..."); // Lança um erro com uma mensagem
    // throw 'Sistema Fora do Ar'; // Lança uma string como erro
    // throw true; // Lança um booleano como erro
    // throw 10; // Lança um número como erro

    // Lança um objeto com informações do erro
    throw {
        nome: erro.name, // Nome do erro
        msg: erro.message, // Mensagem do erro
        date: new Date() // Data e hora do erro
    };
}

// Função que tenta imprimir o nome em letras maiúsculas
function imprimirNomeGritado(obj) {
    try {
        // Tenta imprimir o nome do objeto em maiúsculas seguido de '!!!'
        console.log(obj.name.toUpperCase() + '!!!');
    } catch (e) {
        // Se ocorrer um erro, chama a função para tratar e relançar o erro
        tratarErroELancar(e);
    } finally {
        // Este bloco será executado independentemente de um erro ocorrer ou não
        console.log('final');
    }
}

// Cria um objeto com a propriedade name
const obj = { name: 'Jackson' };

// Chama a função para imprimir o nome do objeto
imprimirNomeGritado(obj);
