const propriedadePadrao = (valorinicial) => ({
    value: valorinicial,
    writable: false,
    configurable: false,
    enumerable: true,
})


class Usuario {

    constructor(email, senha, nome) {
        Object.defineProperties(this, {
            nome: {
                get: () => nome,
                set: (value) => nome = value
            },
            senha: {
                get: () => senha,
                set: (value) => {
                    if (value.length < 4) {
                        throw new TypeError('Precisa de pelo menos 4 letras')
                    }
                    senha = value
                }

            },

            email: {
                get: () => email,
                set: (value) => email = value,
            }
        },
        )
    }

}


const usuario = new Usuario('emails', 'senhas', 'nomes')
usuario.senha = '1234';


console.log(usuario.senha);