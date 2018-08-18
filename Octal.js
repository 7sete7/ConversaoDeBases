const Octal = {
    value: "",
    toBinary(){
        const decimal = this.toDecimal();
        return Decimal.toBinary(decimal);
    },
    toHexa(){
        const decimal = this.toDecimal();
        return Decimal.toHexa(decimal);
    },
    toDecimal(){
        return multiply(this.value, 8);
    }
};