 //declaração de função

function minhaFuncao(param){
    //bloco de código
}
minhaFuncao("param");

// expressão de função

// as funções criadas com expressoes de funções não possuem nome
// elas recebem o nome da variável (importante ser const para não ser alterado posteriormente)
const soma = function(num1, num2) {
    return num1 + num2}

// ao usar const precisamos definir as variáveis antes de chamar a função