import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-punto2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component {
 // En punto2.component.ts
productos = [
  { 
    nombre: 'Notebook asus 13l', 
    descripcion: 'disco 40gb, 15 pulgadas', 
    img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=500&q=80', 
    precio: 45.5 
  },
  { 
    nombre: 'Monitor lg 14', 
    descripcion: 'pantalla led alta definicion', 
    img: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=500&q=80', 
    precio: 99 
  },
  { 
    nombre: 'Teclado mecanico', 
    descripcion: 'luces rgb switches blue', 
    img: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=500&q=80', 
    precio: 25.0 
  }
];

  carrito: any[] = [];

  agregarAlCarrito(producto: any) {
    this.carrito.push(producto);
    console.log('Producto agregado:', producto.nombre);
  }

  get totalCarrito() {
    return this.carrito.reduce((acc, p) => acc + p.precio, 0);
  }

  vaciarCarrito() {
    this.carrito = [];
  }
}