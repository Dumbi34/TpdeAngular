import { Injectable } from '@angular/core';
import { Inscripcion } from '../models/Inscripcion';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {
  private inscripciones: Array<Inscripcion> = [];

  constructor() { }

  // Retorna todas las inscripciones [cite: 304, 332]
  getInscripciones(): Array<Inscripcion> {
    return this.inscripciones;
  }

  // Agrega una nueva inscripción al array [cite: 306, 338]
  addInscripcion(inscripcion: Inscripcion) {
    this.inscripciones.push(inscripcion);
  }

  // Método opcional para borrar [cite: 361]
  deleteInscripcion(index: number) {
    this.inscripciones.splice(index, 1);
  }
}