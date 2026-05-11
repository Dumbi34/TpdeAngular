import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-punto2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './punto2.component.html',
  styleUrl: './punto2.component.css'
})
export class Punto2Component {
  monto: number = 0;
  monedaDestino: string = 'USD';
  resultado: number = 0;

  // Tasas de conversión fijas para el ejercicio
  tasas: any = {
    USD: 0.0011, 
    EUR: 0.0010,
    BRL: 0.0055
  };

  convertir() {
    this.resultado = this.monto * this.tasas[this.monedaDestino];
  }
}