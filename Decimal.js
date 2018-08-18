const Decimal = {
  value: "",
  
  toBinary(value) {
    return divide(value || this.value, 2);
  },
  
  toHexa(value) {
    let final = "";
    const letras = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    let number = Number(value) || this.value;

    while (number > 0){
      final += letras[(number % 16)];
      number = Math.floor(number / 16);
    }

    return final.split("").reverse().join("");
  },
  
  toOctal(value) {
    return divide(value || this.value, 8);
  }
};

