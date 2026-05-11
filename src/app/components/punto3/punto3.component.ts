import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-punto3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto3.component.html',
  styleUrl: './punto3.component.css'
})
export class Punto3Component {
  // Array de iconos para las 6 parejas [cite: 41]
  iconos = ['🚀', '🎮', '👾', '🌈', '🔥', '💎'];
  cartas: any[] = [];
  seleccionadas: any[] = [];
  intentos: number = 0;
  maxIntentos: number = 10; // Ejemplo: 10 intentos [cite: 43]
  victoria: boolean = false;
  juegoIniciado: boolean = false;

  constructor() {
    this.inicializarJuego();
  }

  inicializarJuego() {
    // Crear 12 cartas (6 parejas) [cite: 41]
    const mazo = [...this.iconos, ...this.iconos];
    // Barajar aleatoriamente [cite: 41]
    this.cartas = mazo
      .sort(() => Math.random() - 0.5)
      .map((icon, index) => ({
        id: index,
        valor: icon,
        visible: false,
        descubierta: false
      }));
    this.intentos = this.maxIntentos;
    this.victoria = false;
    this.seleccionadas = [];
  }

  iniciar() {
    this.juegoIniciado = true;
    this.inicializarJuego();
  }

  reinicio() {
    this.juegoIniciado = false;
    this.inicializarJuego();
  }

  voltearCarta(carta: any) {
    // Validaciones: no voltear si ya está visible, si el juego terminó o si ya hay 2 seleccionadas [cite: 55]
    if (!this.juegoIniciado || carta.visible || carta.descubierta || this.seleccionadas.length === 2 || this.intentos === 0) {
      return;
    }

    carta.visible = true;
    this.seleccionadas.push(carta);

    if (this.seleccionadas.length === 2) {
      this.verificarPareja();
    }
  }

  verificarPareja() {
    const [c1, c2] = this.seleccionadas;

    if (c1.valor === c2.valor) {
      // Coincidencia: quedan descubiertas [cite: 44]
      c1.descubierta = true;
      c2.descubierta = true;
      this.seleccionadas = [];
      this.verificarVictoria();
    } else {
      // Fallo: se vuelven a tapar y resta un intento [cite: 45]
      setTimeout(() => {
        c1.visible = false;
        c2.visible = false;
        this.seleccionadas = [];
        this.intentos--;
      }, 1000);
    }
  }

  verificarVictoria() {
    if (this.cartas.every(c => c.descubierta)) {
      this.victoria = true; // Descubrió todo el tablero [cite: 53]
    }
  }
}