import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.css']
})
export class CuestionarioComponent implements OnInit {
  preguntas: Array<String>=[
  "¿Qué es un pronombre?",
  "¿Qué parte del sol está más caliente?",
  "¿Qué se agrega al hierro para hacer el acero?",
  "¿En qué año se publicó el primer volumen de la trilogía del Señor de los Anillos?",
  "¿Cuál es el nombre de un triángulo sin lados iguales?",
  "¿Cuánto es dos tercios de 108?",
  "¿Cuál de estos países no tienen frontera con Brasil?",
  "¿Cuál es el nombre de la cascada más alta del mundo?",
  "¿Por qué película Russell Crowe ganó el Oscar al Mejor Actor?",
  "El caviar verdadero es de huevos de qué tipo de pescado:",
  ];
  respuestasCorrectas: Array<String>=[
  "Palabra para usar en vez del nombre",
  "Su atmósfera",
  "Carbono",
  "1954",
  "Escaleno",
  "72",
  "Ecuador y Argentina",
  "Salto del Ángel",
  "El Gladiador",
  "Esturión",
  ];
  respuestasContestadas: Array<String>=[
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  ];
  resultados: String="";
  palomita: String="";

  constructor() { }

  ngOnInit(): void {
  }

  verificar(): void{
    if (confirm("¿Desea terminar y ver la calificacón de su cuestionario?") == true) {
      let control:boolean=true;
      for (let i=0; i<=this.respuestasContestadas.length; i++) {
        if(this.respuestasContestadas[i]==""){
          control=false;
          break;
        }
      }

      if(control == false){
         window.alert("Aun hay preguntas sin contestar");
      }
      else{
        this.calificar();
      }
    }
  }
  calificar(): void{
    let puntos:number =0;
    for (let i=0; i<this.respuestasCorrectas.length; i++){
      if (this.respuestasCorrectas[i]==this.respuestasContestadas[i]) {
        puntos++;
      }
      else{

      }
    }
    this.palomita="✔";
    this.resultados= "Su calificación es: "+puntos;
  }

}

