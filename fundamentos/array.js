const valores = [7.5, 9.9, 9.5, 98.9, 8.1, 7.5, 8, 4, 6, 48.5, 19.4]
console.log (valores[0], valores[3])
console.log(valores[4])

valores [4] = 10
console.log(valores.length) //length verifica o numero de elementos dentro do array

valores.push({id:3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) //pop tira o ultimo elemneto do array
delete valores[0] //delete retira o elemento mencionado
console.log(valores)
console.log(typeof valores) //typeof menciona o tipo do array, no caso é um objeto
