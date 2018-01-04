/* 6- Que mostraría el siguiente programa por la pantalla
(no lo escribas, calculalo de memoria) */
function recogedor(valor){
    if(valor instanceof Object)
        valor.numero=9
    else if (valor instanceof Number)
        valor=7
}

var numero = 8
recogedor(numero)

var objeto = {
    numero:10
}
recogedor(objeto)

console.log(numero) // 8 (valor da variable)
console.log(objeto.numero)  // 9 (valor do atributo)
