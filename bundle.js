function divide(t,e){let i=Number(t),r="";for(;i>=e;)r+=Math.floor(i%e).toString(),i=Math.floor(i/e);return(r+=i.toString()).split("").reverse().join("")}function multiply(t,e){let i=String(t).split(""),r=[];for(let t=i.length-1,l=0;t>=0;t--,l++)r.push(transformLetters(i[t])*Math.pow(e,l));return r.reduce((t,e)=>Number(t)+Number(e))}function transformLetters(t){const e=["A","B","C","D","E","F"];let i="";for(let r of t.split(""))i+=-1!=e.indexOf(r.toUpperCase())?e.indexOf(r)+10:r;return i}const Decimal={value:"",toBinary(t){return divide(t||this.value,2)},toHexa(t){let e="";const i=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];let r=Number(t)||this.value;for(;r>0;)e+=i[r%16],r=Math.floor(r/16);return e.split("").reverse().join("")},toOctal(t){return divide(t||this.value,8)}},Octal={value:"",toBinary(){const t=this.toDecimal();return Decimal.toBinary(t)},toHexa(){const t=this.toDecimal();return Decimal.toHexa(t)},toDecimal(){return multiply(this.value,8)}},Hexa={value:"",toBinary(){return divide(this.toDecimal(),2)},toDecimal(){return multiply(this.value,16)},toOctal(){return divide(this.toDecimal(),8)}},Binary={value:"",toDecimal(){return multiply(this.value,2)},toHexa(){const t=this.toDecimal();return Decimal.toHexa(t)},toOctal(){const t=this.toDecimal();return Decimal.toOctal(t)}};function changeValue(t){Decimal.value=Hexa.value=Octal.value=Binary.value=t||0}NodeList.prototype.drawValueFrom=function(from, value){for(const input of this)input.id!=from&&(input.value=value? eval(`${from}.to${input.id}()`):"")};const inputs=document.querySelectorAll("input");for(let t of inputs)t.addEventListener("input",t=>{changeValue(t.target.value);const e=t.target.id;inputs.drawValueFrom(e, t.target.value)});
