const idade = 12;

const exibirIdade = () => {
    const idade = 18;
    console.log(idade);
}

const exibirExibirIdade = () => {
    exibirIdade();
    console.log(idade);
}



exibirIdade();
exibirExibirIdade();