function changeValue(value){
    Decimal.value = 
    Hexa.value    = 
    Octal.value   = 
    Binary.value  = value || 0;
}

NodeList.prototype.drawValueFrom = function(from, value) {
    for(const input of this)
        if(input.id != from)
            input.value = value? eval(`${from}.to${input.id}()`) : "";
}

const inputs = document.querySelectorAll("input");

for(let input of inputs)
    input.addEventListener('input', e => {
        changeValue(e.target.value);
        const id = e.target.id;
        inputs.drawValueFrom(id, e.target.value);
    });


