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
const resultadoSome = lista.some((objeto) => objeto.idade > 21); // precisa ter pelo menos um para ser true
const resultadoEvery = lista.every((objeto) => objeto.idade > 50);//todos tem que dar true

console.log('resultadoSome:', resultadoSome);
console.log('resultadoEvery:', resultadoEvery);