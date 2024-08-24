import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-value-2',
  standalone: true,
  imports: [],
  templateUrl: './input-value-2.component.html',
  styleUrl: './input-value-2.component.css'
})
export class InputValue2Component {
  @Output() valor2emitido = new EventEmitter<number>();

  emitirValor2(){
    this.valor2emitido.emit();
  }
}
