const lista = [
    {
        nome: 'Jose',
        idade: 13,
        cartoes: ['3232', '6567']
    },
    {
        nome: 'Joao',
        idade: 19,
        cartoes: ['3245', '6560']
    },
    {
        nome: 'Maria',
        idade: 45,
        cartoes: ['3235', '6566']
    },
    {
        nome: 'Gabriela',
        idade: 25,
        cartoes: ['3232', '6576']
    },
    {
        nome: 'Fernanda',
        idade: 65,
        cartoes: ['3237', '6509']
    },
    {
        nome: 'André',
        idade: 69,
        cartoes: ['878', '6517']
    },
    {
        nome: 'Helena',
        idade: 56,
        cartoes: ['1231', '7645']
    },
    {
        nome: 'Marcelo',
        idade: 26,
        cartoes: ['5454', '0977']
    },
    {
        nome: 'Gustavo',
        idade: 98,
        cartoes: ['9557', '1316']
    },
    {
        nome: 'Sandra',
        idade: 65,
        cartoes: ['0345', '1567']
    },

]

const cartoes = lista.flatMap((cartao) => cartao.cartoes);

console.log(cartoes);