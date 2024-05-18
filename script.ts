// Crie uma função que arredonda um valor passado para cima;
// A função pode receber string ou number;
// A função deve retornar o mesmo tipo que ela receber

function arredondar(valor: string): string;
function arredondar(valor: number): number;
function arredondar(valor: string | number): string | number {
  if (typeof valor === 'number') {
    return Math.ceil(valor);
  } else {
    return Math.ceil(Number(valor)).toString();
  }
}

console.log(arredondar(200.32));
console.log(arredondar('200.32'));
