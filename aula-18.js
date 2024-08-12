
function calcular(valor) {
    if (valor === 0) {
        throw new Error(' Nao pode ser Zero');
    }
    return valor / 2;
}

try {
   const resultado = calcular(0)
   console.log('resultado: ', resultado);
} catch (error) {
    console.log(error.message)
} finally { //pra fechar um erro que aconteceu no catch
    console.log('chegou no finally')
}


console.log('fim')
