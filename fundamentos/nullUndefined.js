let valor; // Declaração da variável valor, inicialmente não definida
console.log(valor); // Saída: undefined (valor não atribuído ainda)

valor = null; // Atribui o valor null à variável valor
console.log(valor); // Saída: null (valor está explicitamente definido como null)
// console.log(valor.toString()); // Erro: TypeError - Não é possível ler a propriedade toString de null

const produto = {}; // Declaração de um objeto vazio chamado produto
console.log(produto.preco); // Saída: undefined (a propriedade preco não está definida no objeto produto)
console.log(produto); // Saída: {} (objeto produto vazio)

produto.preco = 3.50; // Atribui o valor 3.50 à propriedade preco do objeto produto
console.log(produto); // Saída: { preco: 3.5 } (objeto produto agora tem a propriedade preco)

produto.preco = undefined; // Evite atribuir undefined explicitamente
console.log(!!produto.preco); // Saída: false (conversão para booleano, undefined é considerado false)
console.log(produto); // Saída: { preco: undefined } (a propriedade preco está definida como undefined)

// delete produto.preco; // Você pode usar delete para remover uma propriedade de um objeto

produto.preco = null; // Atribui null à propriedade preco do objeto produto (sem preço)
console.log(!!produto.preco); // Saída: false (conversão para booleano, null é considerado false)
console.log(produto); // Saída: { preco: null } (a propriedade preco está definida como null)
