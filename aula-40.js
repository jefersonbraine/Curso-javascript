const qualquer = {
    abc: 'dasdas',
    fasdasd: 'asdasdas',
    sadasdas: 'asdasdas',
    adsds: 'sadasdas'
}
const novoQualquer = {
    ...qualquer,
    final: 'FINAL'
}
const lista = [54, 54554, 54545, 65, 6, 65, 6561];
const lista2 = [78, 58, 365, 399, 275, 18, 141];

//console.log(novoQualquer);

// console.log(lista);
// console.log(lista2);

const listaJunta = [...lista, ...lista2]

console.log(listaJunta);