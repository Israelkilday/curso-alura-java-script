function apresentar(nome) {
    return `meu nome é ${nome}`;
}

const apresentaArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

// arrow function com mais de uma linha de construção

const numerosPequenos = (num1, num2) => {
    if (num1 || num2 > 10) {
        return "somentes de 1 a 9"
    } else {
        return num1 + num2;
    }
}

// hosting: arrow function se comporta como expressão 