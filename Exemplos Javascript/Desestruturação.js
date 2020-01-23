const usuario = {
    nome: 'André',
    idade: 24,
    endereco: {
        cidade: 'Blumenau',
        estado: 'SC',
    },
};

const { nome, idade, endereco: { cidade } } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome({ nome,idade, endereco:{cidade}}) {
    console.log(nome,idade,cidade);
}

mostraNome(usuario);