export class Inscripcion {
  dni: number;
  precio: number;
  categoriaAlumno: string; // 1, 2 o 3
  fechaInscripcion: Date;
  email: string;
  curso: string;
  precioFinal: number;

  constructor() {
    this.dni = null as any;
    this.precio = null as any;
    this.categoriaAlumno = '';
    this.fechaInscripcion = new Date();
    this.email = '';
    this.curso = '';
    this.precioFinal = 0;
  }
}