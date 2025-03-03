//Definimos una clase, tiene que tener un constructor y un metodo
class Persona {
    nombre: string;
    apellido: string;
    edad: number;

    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    mostrarDetalles() {
        console.log(`Nombre: ${this.nombre}, Apellido: ${this.apellido}, Edad: ${this.edad}`);
    }
}

//Una simple funcion , siempre fuera de la Class
function sumar(a: number, b: number): number {
    return a + b;
}