const $links = document.querySelectorAll('.link');

$links.forEach(($link) => {
  if($link instanceof HTMLAnchorElement){
    console.log($link);
  }
})
// Aqui é um array
const array = [1,2,3];

// Transformamos em array
const arrayLinks = Array.from($links);