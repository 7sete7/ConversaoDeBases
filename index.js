function changeValue(value){
    Decimal.value = 
    Hexa.value    = 
    Octal.value   = 
    Binary.value  = value || 0;
}

NodeList.prototype.drawValueFrom = function(from) {
    for(const input of this)
        if(input.id != from)
            input.value = eval(`${from}.to${input.id}()`) || "";
}

const inputs = document.querySelectorAll("input");

for(let input of inputs)
    input.addEventListener('input', e => {
        changeValue(e.srcElement.value);
        const id = e.srcElement.id;
        inputs.drawValueFrom(id);
    });


