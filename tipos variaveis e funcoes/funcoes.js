let x = "";
console.log(x);
x = "oi";

//1) declara a função
function imprimeTexto(texto){
    console.log(texto)
}

//2) executa a função
imprimeTexto("oi");
// a mesma função pode ser usada para outras variáveis
imprimeTexto("outro texto");

// existem três formas de escrever funções

function soma(){
    // OBS a cláusula retono deve ser a última instrução do bloco porque depois dela o javascript sai da função e não executa o que está abaixo
    return 2 + 2;
}

//console.log(soma()); ou chamar uma função dentro de outra função também é possível
imprimeTexto (soma());