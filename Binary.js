const Binary = {
    value: "",
    toDecimal(){
        return multiply(this.value, 2);
    },
    toHexa(){
        const decimal = this.toDecimal();
        return Decimal.toHexa(decimal);
    },
    toOctal(){
        const decimal = this.toDecimal();
        return Decimal.toOctal(decimal);
    }
};