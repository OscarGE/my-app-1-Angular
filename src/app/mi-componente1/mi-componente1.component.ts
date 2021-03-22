import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-componente1',
  templateUrl: './mi-componente1.component.html',
  styleUrls: ['./mi-componente1.component.css']
})
export class MiComponente1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  nombre= 'MiComponente1Component';
}
