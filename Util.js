function divide(value, base) {
  let div = Number(value);
  let final = "";

  while (div >= base) {
    final += Math.floor(div % base).toString();
    div = Math.floor(div / base);
  }
  final += div.toString();
  
  return final.split("").reverse().join("");
}

function multiply(value, base) {
  let numbers = String(value).split("");
  let final = [];
  for (let i = numbers.length - 1, cont = 0; i >= 0; i--, cont++) 
    final.push(transformLetters(numbers[i]) * Math.pow(base, cont));

  return final.reduce((i,j) => Number(i) + Number(j));
}

function transformLetters(value){
    const letras = ["A", "B", "C", "D", "E", "F"];
    let final = "";

    for(let letra of value.split(""))            
            final += letras.indexOf(letra.toUpperCase()) != -1 ? letras.indexOf(letra) + 10 : letra;
    return final;
}
