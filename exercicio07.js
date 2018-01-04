/*
7- Crea un objeto de tipo Ordenador, que tenga las propiedades marca, modelo, ram y estado.
Este objeto tendrá una función arrancar y apagar que cambiarán el estado del mismo.
Después usa el objeto:
Muestra por pantalla su marca y su estado
Enciende el ordenador
Vuelve a mostrar su estado
El problema lo podemos abordar de 2 formas diferentes:
Creando directamente el objeto y usándolo   Ej var ordenador={  …   }
Creando una función (que representaría una Clase) y usando el operador new
Haz el ejercicio de las 2 formas

*/

// primeira forma
var Ordenador = {
    marca: "hp ",
    modelo: "100",
    ram:"8",
    estado:"apagado",

    arrancar: function(){
        this.estado="encendido";
    }
}

Ordenador.arrancar();
console.log(Ordenador);

// segunda forma

function Ordenador() {
    var equipo = new Ordenador;
    equipo.marca="SX";
    equipo.modelo="SDF";
    equipo.ram="4";
    equipo.arrancar;
    console.log(equipo);
}

