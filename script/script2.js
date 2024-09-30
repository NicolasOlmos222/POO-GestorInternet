class Banco {
    constructor(nombre, edad, dni) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.saldoPesos = 0;
        this.saldoDolares = 0;
        this.limiteDolares = 200;
        this.tasaConversion = 1200;
    }

    mostrarInformacion(){
        alert("Nombre: " + this.nombre + "\nEdad: " + this.edad + "\nDNI: " + this.dni + "\nSaldo en pesos: " + this.saldoPesos + "\nSaldo en dolares: " + this.saldoDolares);
    }

    ingresarPesos(cantidad) {
        if (cantidad > 0) {
            this.saldoPesos += cantidad;
            alert("Se ingreso: " + cantidad + " pesos");
        } else {
            alert("La cantidad debe ser mayor a 0");
        }
    }

}

var usuario = new Banco("Juan", 25, "12345678");

usuario.mostrarInformacion();
usuario.ingresarPesos(150);

usuario.mostrarInformacion();
