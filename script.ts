let total: string | number = 200;
total = "4000";

function isNumber(value: string | number){
  if(typeof value === 'number'){
    console.log('É um número');
    return true;
  }
  else{
    console.log('Não é um número');
  }

}

console.log(isNumber(200));