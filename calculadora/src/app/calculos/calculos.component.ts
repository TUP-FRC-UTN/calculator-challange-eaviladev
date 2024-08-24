import { Component } from '@angular/core';

@Component({
  selector: 'app-calculos',
  standalone: true,
  imports: [],
  templateUrl: './calculos.component.html',
  styleUrl: './calculos.component.css'
})
export class CalculosComponent {

  suma(valor1: number, valor2:number){
    return valor1 + valor2;
  }

  resta(valor1: number, valor2:number){
    return valor1 + valor2;
  }

  multiplicacion(valor1: number, valor2:number){
    return valor1 + valor2;
  }

  resta(valor1: number, valor2:number){
    return valor1 + valor2;
  }
}
