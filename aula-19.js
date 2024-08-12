

function calcular () { // em parenteses se coloca o parametro
    console.log('passou')
}

const calcular2 = function() {
    console.log('passou 2')
}

const calcular3 = () => {
    return 'abc'
}

// ou simplesmente 

//const calcular3 = () =>  'abc'

const calcular4 = () => console.log('passou 4')




calcular2()
calcular()
calcular4();