const lista = [
    {
        nome: 'Jose',
        idade: 13
    },
    {
        nome: 'Joao',
        idade: 19
    },
    {
        nome: 'Maria',
        idade: 45
    },
    {
        nome: 'Gabriela',
        idade: 25
    },
    {
        nome: 'Fernanda',
        idade: 65
    },
    {
        nome: 'André',
        idade: 69
    },
    {
        nome: 'Helena',
        idade: 56
    },
    {
        nome: 'Marcelo',
        idade: 26
    },
    {
        nome: 'Gustavo',
        idade: 98
    },
    {
        nome: 'Sandra',
        idade: 65
    },

]


const funcaoReduce = (acc, objeto) => {

    return {
        ...acc,
        [objeto.nome]: {
            idade: objeto.idade
        }
    }
}

const pessoas = lista.reduce(funcaoReduce, {});

const chaves = Object.keys(pessoas);

const listaDeVolta = chaves.map((chave) => ({
    nome: chave, idade: pessoas[chave].idade
}))

//console.log(chaves)

//console.log(pessoas);

console.log(listaDeVolta);