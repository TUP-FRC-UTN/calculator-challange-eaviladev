import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputValue1Component } from './input-value-1/input-value-1.component';
import { InputValue2Component } from './input-value-2/input-value-2.component';
import { ResultValueComponent } from './result-value/result-value.component';
import { CalculosComponent } from './calculos/calculos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputValue1Component, InputValue2Component, ResultValueComponent, CalculosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculadora';

  valor1:number=0;
  valor2:number=0;

  recibirValor1(numero:number)
  {
    this.valor1 = numero;
  }

  recibirValor2(numero:number)
  {
    this.valor2 = numero;
  }
}


