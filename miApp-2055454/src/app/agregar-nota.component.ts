import { Component } from '@angular/core';
import { NotaService } from './nota.service';

@Component({
  selector: 'app-agregar-nota',
  templateUrl: './agregar-nota.component.html',
  styleUrls: ['./agregar-nota.component.css']
})
export class AgregarNotaComponent {

  nuevaNota = {
    nombre: '',
    fecha: '',
    descripcion: ''
  };

  constructor(private notaService: NotaService) { }

  agregarNota(): void {
    this.notaService.agregarNota(this.nuevaNota);
    this.nuevaNota = {
      nombre: '',
      fecha: '',
      descripcion: ''
    };
  }
}
