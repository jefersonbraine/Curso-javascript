class Produto {
    nome;
    preco;
    descricao;
    codigo;
    quantidade_em_estoque;

    alterarPreco(novoPreco) {
        if (novoPreco >= 0) {
            this.preco = novoPreco;
        }
    }
    adicionarestoque(quantidade) {
        this.quantidade_em_estoque += quantidade;
    }

    removerEstoque(quantidade) {
        const novoEstoque = this.quantidade_em_estoque -= quantidade;
        if (novoEstoque >= 0) {
            this.quantidade_em_estoque -= novoEstoque;
        } else {
            throw Error('Estoque não pode ficar negativo')
        }

    }

    constructor(nome, descricao, codigo) {
        this.nome = nome;
        this.descricao = descricao;
        this.codigo = codigo;
        this.preco = 0;
        this.quantidade_em_estoque = 0;
    }

}


class Smartphone extends Produto {
    marca;
    modelo;
    sistema_operacional;

    descricao() {
        return `
        nome: ${this.nome}\n
        preço: ${this.preco}\n
        descrição: ${this.descricao}\n
        codigo: ${this.codigo}\n
        Quantidade: ${this, this.quantidade_em_estoque}\n
        marca: ${this.marca} \n
        modelo: ${this.modelo} \n
        sistema operacional ${this.sistema_operacional} \n
        `
    }

    constructor(nome, descricao, codigo, marca, modelo, sistema_operacional) {
        super(nome, descricao, codigo);
        this.marca = marca
        this.modelo = modelo;
        this.sistema_operacional = sistema_operacional;

    }
}

const smartphone1 = new Smartphone(
    'Iphone',
    'Celular Iphone SE',
    '734G23U4GH23U423',
    'Apple',
    'SE',
    'IOS15',
);

smartphone1.alterarPreco(300.30);
smartphone1.adicionarestoque(5);

console.log(smartphone1);