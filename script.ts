class Produto {
  nome: string;
  preco: number;
  constructor(nome: string, preco: number){
    this.nome = nome;
    this.preco = preco;
  }

  precoReal(){
    return `R$ ${this.preco}`; 
  }
}

const livro = new Produto("A Guerra dos Tronos", 120);

console.log(livro.nome);
console.log(livro.precoReal());

console.log(livro instanceof Produto);

class Livro {
  autor: string;
  constructor (autor: string){
    this.autor = autor;
  }
}

class Jogo {
  jogadores: number;
  constructor (jogadores: number){
    this.jogadores = jogadores;
  }
}

function buscarProduto(busca: string){
  if (busca === "Hobbit"){
    return new Livro('J. R. R. Tolkien');
  }
  if (busca === "Fortnite"){
    return new Jogo(100);
  }
  return null;
}

const produto = buscarProduto("Fortnite");

if(produto instanceof Livro){
  console.log(produto.autor);
}

if(produto instanceof Jogo){
  console.log(produto.jogadores);
}

