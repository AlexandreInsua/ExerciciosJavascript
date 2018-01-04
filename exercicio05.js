/* 5- Crea una función que muestre por pantalla los números
 del 1 al 30 y se salte los números 4, 6 y 12. Llama luego a esa función. */

 for (var i = 0 ; i <= 30; i++) {
      
    if (i == 4 || i == 6 || i == 12 ){
        continue;
    }
        console.log(i);
}
