import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-punto2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto2.component.html',
  styleUrl: './punto2.component.css'
})
export class Punto2Component {
  productos = [
    { nombre: 'notebook asus 13l', descripcion: 'disco 40gb, 15 pulgadas', img: 'https://picsum.photos/400/300?random=1', precio: 45.5 },
    { nombre: 'monitor lg 14', descripcion: 'pantalla led alta definicion', img: 'https://picsum.photos/400/300?random=2', precio: 99 },
    { nombre: 'teclado mecanico', descripcion: 'luces rgb switches blue', img: 'https://picsum.photos/400/300?random=3', precio: 25.0 }
  ];

  carrito: any[] = [];
  total: number = 0;

  agregarAlCarrito(prod: any) {
    const existe = this.carrito.find(item => item.nombre === prod.nombre);
    if (!existe) {
      this.carrito.push(prod);
      this.calcularTotal();
    } else {
      alert('Este producto ya está en tu carrito.');
    }
  }

  calcularTotal() {
    this.total = this.carrito.reduce((sum, item) => sum + item.precio, 0);
  }

  limpiarCarrito() {
    this.carrito = [];
    this.total = 0;
  }
}