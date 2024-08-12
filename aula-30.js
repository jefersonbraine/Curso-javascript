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

// const pessoa = {
//     jose: {
//         idade: 54,
//     },
//     Joao: {
//         idade: 32,
//     },
//     Maria: {
//         idade: 23,
//     }
// }

const funcaoReduce = (acc, objeto) => {
    //  const obj = { 
    //     Jose: {
    //         idade: 13
    //     }
    // }
    return {
        ...acc,
        [objeto.nome]: {
            idade: objeto.idade
        }
    }
}

const pessoas = lista.reduce(funcaoReduce, {});

const pessoasArray = lista.reduce((acc, objeto) => {
    acc.push(objeto.idade);
    return acc;
}, [])

console.log(pessoas);
console.log(pessoas.Gustavo.idade);
console.log(pessoasArray);