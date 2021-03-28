import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  listadoNumeros: Array<number>=[10,8,12,22];
  valor1: number = 10;
  valor2: number = 2;
  suma: number = this.valor1 + this.valor2;
  resta: number = this.valor1 - this.valor2;
  division: number = this.valor1 / this.valor2;
  multiplicacion: number = this.valor1 * this.valor2;

  actualizar(): void{
    this.suma= this.valor1 + this.valor2;
    this.resta= this.valor1 - this.valor2;
    this.division= (this.valor1 / this.valor2);

    this.multiplicacion= this.valor1 * this.valor2;
  }
  sumaTotal: number=0;
  constructor() { }

  ngOnInit(): void {
    for(let i=0; i<this.listadoNumeros.length; i++){
      this.sumaTotal=this.sumaTotal+this.listadoNumeros[i];
    }
  }
  actualizar2(): void{
    this.sumaTotal=0;
    for(let i=0; i<this.listadoNumeros.length; i++){
      this.sumaTotal=this.sumaTotal+this.listadoNumeros[i];
    }
  }
}
