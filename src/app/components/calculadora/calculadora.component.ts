import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  valor1: number = 10;
  valor2: number = 2;
  suma: number = this.valor1 + this.valor2;
  resta: number = this.valor1 - this.valor2;
  division: number = this.valor1 / this.valor2;
  multiplicacion: number = this.valor1 * this.valor2;
  constructor() { }

  ngOnInit(): void {
  }

}
