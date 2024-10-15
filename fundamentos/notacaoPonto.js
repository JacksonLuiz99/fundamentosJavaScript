console.log(Math.ceil(6.1)); // Saída: 7

const obj1 = {};
obj1.nome = 'bola mucha';
console.log(obj1.nome); // Saída: bola mucha

function Obj(nome){
    this.nome = nome;
    this.exec = function(){
        console.log('Exec....');
    };
}

const Obj2 = new Obj('trave');
const obj3 = new Obj('var');
console.log(Obj2.nome, obj3.nome); // Saída: trave var
obj3.exec(); // Saída: Exec....
