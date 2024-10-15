function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

const obj = { max: 50, min: 40 };
console.log(rand(obj)); // Saída: número aleatório entre 40 e 50
console.log(rand({min: 955})); // Saída: número aleatório entre 955 e 1000 (valor máximo padrão)
console.log(rand({})); // Saída: número aleatório entre 0 e 1000 (valores padrão)
console.log(rand()); // Erro: TypeError - não é possível desestruturar undefined ou null
