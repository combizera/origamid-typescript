const {body}: {body: HTMLElement} = document;

console.log(body);

function handleData({nome, preco}: {nome: string; preco: number}){
  nome.includes('book');
  preco.toFixed();
}

handleData({
  nome: "Notebook",
  preco: 2500
});



function handleClick( {currentTarget, pageX}: {currentTarget: EventTarget | null; pageX: number}){
  if(currentTarget instanceof HTMLElement){
    currentTarget.innerHTML = `<h1>Mouse click em x: ${pageX}</h1>`
  }
  console.log(pageX);
}

document.documentElement.addEventListener('click', handleClick);