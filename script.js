"use strict";
// EXEMPLO 1
// function retorno<variavel>(argumento: variavel): variavel{
//   return argumento;
// }
// console.log(retorno('again'));
// console.log(retorno(10));
// console.log(retorno(false));
// EXEMPLO 2
// const numeros = [1,2,203,5,8];
// const frutas = ["laranja", "maca", "maracuja", "uva", "banana"];
// function firstTree<TipoLista>(lista: TipoLista[]): TipoLista[]{
//   return lista.slice(0, 3);
// };
// console.log(firstTree(numeros));
// console.log(firstTree(frutas));
// EXEMPLO 3
// function notNull<T>(argumento: T){
//   if(argumento !== null) return argumento;
//   else return null;
// }
// console.log(notNull('YGOR')?.toLowerCase());
// EXEMPLO 4
function tipoDado(argumento) {
    const resultado = {
        dado: argumento,
        tipo: typeof argumento,
    };
    console.log(resultado);
    return resultado;
}
tipoDado('teste');
tipoDado(200);
tipoDado(false);
