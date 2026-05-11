import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Inscripcion } from '../../models/Inscripcion';
import { InscripcionService } from '../../services/Inscripcion.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-inscripciones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './Inscripcion.component.html',
  styleUrl: './Inscripcion.component.css'
})
export class InscripcionesComponent {
  inscripcion: Inscripcion = new Inscripcion();
  listaInscripciones: Array<Inscripcion> = [];

  constructor(private inscripcionService: InscripcionService) {
    this.listaInscripciones = this.inscripcionService.getInscripciones();
  }

  // Calcula el precio final según la categoría 
  calcularPrecioFinal() {
    if (this.inscripcion.precio > 0 && this.inscripcion.categoriaAlumno !== '') {
      let descuento = 0;
      if (this.inscripcion.categoriaAlumno === '1') descuento = 0.35; // Estudiante 
      else if (this.inscripcion.categoriaAlumno === '2') descuento = 0.50; // Egresado 
      
      this.inscripcion.precioFinal = this.inscripcion.precio * (1 - descuento);
    }
  }

  registrar(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.inscripcion.fechaInscripcion = new Date();
    this.inscripcionService.addInscripcion({...this.inscripcion});
    
    form.resetForm();
    
    this.inscripcion = new Inscripcion();
    this.inscripcion.dni = null as any;
    this.inscripcion.precio = null as any;
  }

  // Getters para el resumen 
  get totalGeneral(): number {
    return this.listaInscripciones.reduce((acc, i) => acc + i.precioFinal, 0);
  }

  contarPorCategoria(cat: string): number {
    return this.listaInscripciones.filter(i => i.categoriaAlumno === cat).length;
  }
}