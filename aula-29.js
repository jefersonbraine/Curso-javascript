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
        nome: 'Gustav0',
        idade: 98
    },
    {
        nome: 'Sandra',
        idade: 65
    },

]

const buscarPessoa = (pessoa) => pessoa.nome === 'Helena';

const novaPessoa = lista.find(buscarPessoa);

console.log(novaPessoa)