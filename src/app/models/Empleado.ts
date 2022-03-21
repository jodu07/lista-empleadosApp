export class Empleado {
    legajo: number;
    nombre: string;
    apellido: string;
    sexo: string;
    salario: number;


    constructor(leg: number, nom: string, ape: string, sex: string, sal: number){ 
        this.legajo = leg;
        this.nombre = nom;
        this.apellido = ape;
        this.sexo = ape;
        this.salario = sal;

    }

}