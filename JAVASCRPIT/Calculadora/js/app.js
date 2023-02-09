console.log('app calculadora');


function sumar(){
const form = document.getElementById('form');
let operandoA = form['operandoA'];
let operandoB = form['operandoB'];
let resultado = parsetInt(operandoA.value) + parseInt(operandoB.value);
if(isNaN(resultado))
resultado = 'No es un numero';
document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
console.log(`Resultado: ${resultado}`);
}

