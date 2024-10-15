// Compara se a string '1' é igual à string '1' (igualdade solta)
console.log('01)', '1' == '1'); // Saída: true

// Compara se a string '1' é estritamente igual à string '1' (igualdade estrita)
console.log('02)', '1' === '1'); // Saída: true

// Compara se a string '3' é diferente da string '3' (desigualdade solta)
console.log('03)', '3' != '3'); // Saída: false

// Compara se a string '3' é estritamente diferente da string '3' (desigualdade estrita)
console.log('04)', '3' !== '3'); // Saída: false

// Compara se 3 é menor que 2
console.log('05)', 3 < 2); // Saída: false

// Compara se 3 é maior que 2
console.log('06)', 3 > 2); // Saída: true

// Compara se 3 é menor ou igual a 2
console.log('07)', 3 <= 2); // Saída: false

// Compara se 3 é maior ou igual a 2
console.log('08)', 3 >= 2); // Saída: true

// Cria um objeto Date representando o tempo 0 (1 de janeiro de 1970)
const d1 = new Date(0);
const d2 = new Date(0); // Cria outro objeto Date com o mesmo tempo

// Compara se d1 é estritamente igual a d2 (referências diferentes)
console.log('09)', d1 === d2); // Saída: false

// Compara se d1 é igual a d2 (referências diferentes)
console.log('10)', d1 == d2); // Saída: false

// Compara se os tempos dos dois objetos Date são iguais (valores iguais)
console.log('11)', d1.getTime() == d2.getTime()); // Saída: true

// Compara se os tempos dos dois objetos Date são estritamente iguais
console.log('12)', d1.getTime() === d2.getTime()); // Saída: true

// Compara o dia do mês de d1 e d2 (ambos representam 1 de janeiro)
console.log('13)', d1.getDate() == d2.getDate()); // Saída: true

// Compara se os dias do mês de d1 e d2 são estritamente iguais
console.log('14)', d1.getDate() === d2.getDate()); // Saída: true

// Compara os milissegundos de d1 com o dia da semana de d2 (0 para domingo)
console.log('15)', d1.getMilliseconds() === d2.getDay()); // Saída: false

// Compara se undefined é igual a null (igualdade solta)
console.log('16)', undefined == null); // Saída: true

// Compara se undefined é estritamente igual a null
console.log('17)', undefined === null); // Saída: false
