
const lista = [
    {
        nome: 'Julio',
        idade: 18
    },
    {
        nome: 'Joao',
        idade: 67
    },
    {
        nome: 'Maria',
        idade: 35
    },
    {
        nome: 'Ana',
        idade: 12
    },
    {
        nome: 'Silvia',
        idade: 23
    },
    {
        nome: 'Marcos',
        idade: 24
    },
    {
        nome: 'Luiz',
        idade: 78
    },
    {
        nome: 'Marcelo',
        idade: 42
    },
]

const converterObjeto = (objeto) => {
    return {
        nome: objeto.nome,//anotar diferenças
        idade: objeto.idade,//anotar diferenças
        nomeIdade: `${objeto.nome} tem ${objeto.idade} anos`//anotar diferenças
        //...objeto,//spread ou spreat operator
    }
}

console.log(lista.map(converterObjeto));