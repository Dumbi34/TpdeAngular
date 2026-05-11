import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-punto1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto1.component.html',
  styleUrl: './punto1.component.css'
})
export class Punto1Component {
  eventos: Array<any> = [
    { 
      nombre: 'Taller de Yoga', 
      descripcion: 'Encuentro de meditación y posturas básicas al aire libre.', 
      img: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg'
    },
    { 
      nombre: 'Hackathon UNJu', 
      descripcion: 'Competencia de desarrollo para estudiantes de ingeniería.', 
      img: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg'
    }
  ];

  indiceActual: number = 0;

  siguienteEvento() {
    this.indiceActual = (this.indiceActual + 1) % this.eventos.length;
  }

  anteriorEvento() {
    this.indiceActual = (this.indiceActual - 1 + this.eventos.length) % this.eventos.length;
  }
}