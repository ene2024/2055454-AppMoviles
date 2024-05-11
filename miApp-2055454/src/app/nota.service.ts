import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotaService {

  constructor() { }

  obtenerNotas(): any[] {
    const notas = localStorage.getItem('notas');
    return notas ? JSON.parse(notas) : [];
  }

  agregarNota(nuevaNota: any): void {
    let notas = this.obtenerNotas();
    notas.push(nuevaNota);
    localStorage.setItem('notas', JSON.stringify(notas));
  }

  eliminarNota(index: number): void {
    let notas = this.obtenerNotas();
    notas.splice(index, 1);
    localStorage.setItem('notas', JSON.stringify(notas));
  }
}
