import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-componente2',
  templateUrl: './mi-componente2.component.html',
  styleUrls: ['./mi-componente2.component.css']
})
export class MiComponente2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nombre= 'MiComponente2Component';
}
