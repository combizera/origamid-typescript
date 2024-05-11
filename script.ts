class Produto {
  nome: string;
  constructor(nome: string){
    this.nome = nome;
  }
}

const livro = new Produto("A Guerra dos Tronos");

console.log(livro instanceof Produto);

class Livro extends Produto {
  autor: string;
  constructor (nome: string, autor: string){
    super(nome);
    this.autor = autor;
  }
}

class Jogo extends Produto{
  jogadores: number;
  constructor (nome: string, jogadores: number){
    super(nome);
    this.jogadores = jogadores;
  }
}

function buscarProduto(busca: string){
  if (busca === "Hobbit"){
    return new Livro('Hobbit', 'J. R. R. Tolkien');
  }
  if (busca === "Fortnite"){
    return new Jogo('Fortnite', 100);
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

