//Object.defineProperties
//Object.defineProperty

const propriedadePadrao = (valorinicial) => ({
    value: valorinicial,
    writable: false, // se estiver true => usuario.nome = 'novo nome'
    configurable: false, // se estiver como true => posso deletar o nome
    enumerable: true, // se estiver true => ele será exibido no objeto
})


class Usuario {

    constructor(email, senha, nome) {
        Object.defineProperties(this, {
            nome: propriedadePadrao(nome),
            senha: propriedadePadrao(senha),
            email: propriedadePadrao(email),

        })
    }
}
//         Object.defineProperty(this, 'nome', {
//             value: nome,
//             writable: false, // se estiver true => usuario.nome = 'novo nome'
//             configurable: false, // se estiver como true => posso deletar o nome
//             enumerable: true, // se estiver true => ele será exibido no objeto

//         })
//     }
// }

const usuario = new Usuario('emails', 'senhas', 'nomes')


console.log(usuario);