const Hexa = {
    value: "",
    toBinary(){
        const decimal = this.toDecimal();
        return divide(decimal, 2);
    },

    toDecimal(){
        return multiply(this.value, 16);
    },

    toOctal(){
        const decimal = this.toDecimal();
        return divide(decimal, 8);
    }
};
