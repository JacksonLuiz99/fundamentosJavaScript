//null é usado para zera um valor de uma variavél que geralmente esta puxando informação de uma oura variavél

let valor // não incluso
console.log(valor)

valor = null // ausencia d evalor

console.log(valor)
//console.log(valor.toString())

const produto = {}
console.log (produto.preco)
console.log (produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefinied

console.log(!!produto.preco)
// delete produto preco
console.log(produto)

produto.preco = null //sem preço
    console.log(!!produto.preco)
    console.log(produto)
