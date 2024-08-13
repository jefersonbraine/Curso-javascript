class Pessoa {
    nome;
    idade;
    filhos;


    quantosFilhos() {
        if (this.filhos) {
            return this.filhos.length;
        }
        return 0;
    }

    constructor(nome, idade, filhos) {
        this.nome = nome;
        this.idade = idade;
        this.filhos = filhos;



        //super() - roda o constructor padrão
    }
}

const filho1 = new Pessoa('gustavo', 13);
const filho2 = new Pessoa('Gabriel', 10);


const pessoa = new Pessoa('joao', 54, [filho1, filho2]);

console.log('Quantos filhos? ', pessoa.quantosFilhos());


console.log(pessoa);