import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-value-1',
  standalone: true,
  imports: [],
  templateUrl: './input-value-1.component.html',
  styleUrl: './input-value-1.component.css'
})
export class InputValue1Component {

  @Output() valor1emitido = new EventEmitter<number>();

  emitirValor1(){
    this.valor1emitido.emit();
  }

}
