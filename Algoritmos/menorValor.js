//importando a lista do arquivos listaLivros
const livros = require('./listaLivros');

//Para guardar o valor mais barato
function menorValor(arrProdutos, posicaoInicial){
let maisBarato = posicaoInicial;

//Percorrer a array para achar o valor
for (let atual = posicaoInicial; atual < arrProdutos.length -1; atual++){
    //codigo
    if(arrProdutos[atual].preco < arrProdutos[maisBarato].preco){
        maisBarato = atual;
    }
}
    return maisBarato;
}

module.exports = menorValor;