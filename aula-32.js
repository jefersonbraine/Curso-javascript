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

lista.sort((a, b) => {
    if (a.idade < b.idade) {
        return -1;
    }
    if (a.idade > b.idade) {
        return 1;
    }
    return 0;
});

console.log(lista)