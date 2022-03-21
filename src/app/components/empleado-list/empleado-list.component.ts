import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {

  listEmpleados: Empleado[] = [
    { legajo: 1, nombre: 'Juan', apellido: 'Perez', sexo: 'Masculino', salario: 25000 },
    { legajo: 2, nombre: 'Carlos', apellido: 'Diaz', sexo: 'Masculino', salario: 30000 },
    { legajo: 3, nombre: 'Juliana', apellido: 'Ramos', sexo: 'Femenino', salario: 40000 },
    { legajo: 4, nombre: 'Isabel', apellido: 'Jimenez', sexo: 'Femenino', salario: 25000 },
    { legajo: 5, nombre: 'Pepe', apellido: 'Perafan', sexo: 'Masculino', salario: 14000 }

  ]

  radioButtonSeleccionado = 'Todos';

  constructor() { }

  ngOnInit(): void {
  }

  obtenerTotalEmpleados(): number {
    return this.listEmpleados.length;

  }

  obtenerTotalMasculino(): number {
    return this.listEmpleados.filter(list => list.sexo === 'Masculino').length

  }

  obtenerTotalFemenino(): number {
    return this.listEmpleados.filter(list => list.sexo === 'Femenino').length

  }

  empleadoCountRadioButtonChange(radioButtonSelec: string): void{

    this.radioButtonSeleccionado = radioButtonSelec;

  }

}
