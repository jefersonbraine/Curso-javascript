
const mensagem = 'ola mundo '
const mensagem2 = 'terra'

console.log('tamanho: ', mensagem.length)
console.log('concat + :', mensagem + mensagem2)
console.log('concat:', mensagem.concat(mensagem2))
console.log('ES: ', `DDSDSDS ${mensagem} ${mensagem2}`)
console.log("maiuscula: ", mensagem.toUpperCase())
console.log("minuscula: ", mensagem.toLowerCase())
console.log("replace: ", mensagem.replace('ola', 'tchau'))

console.log('quebrar em array: ', mensagem.split(' '));

