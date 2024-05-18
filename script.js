"use strict";
// Crie uma função que arredonda um valor passado para cima;
// A função pode receber string ou number;
// A função deve retornar o mesmo tipo que ela receber
function arredondar(valor) {
    if (typeof valor === 'string') {
        console.log("Valor informado é uma string, não é possível arredondar");
        return;
    }
    if (typeof valor === 'number') {
        let numero = Number.isInteger(valor);
        if (numero) {
            console.log(`O número '${valor}' já é inteiro`);
            return;
        }
        let valorAumentado = Math.ceil(valor);
        console.log("Arredondando para cima...");
        console.log(`Resultado: ${valorAumentado}`);
    }
}
(arredondar(1.0));
