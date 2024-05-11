import { Component, OnInit } from '@angular/core';
import { NotaService } from './nota.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  notas: any[];

  constructor(private notaService: NotaService) { 
    this.notas = [];
   }

  ngOnInit(): void {
    this.notas = this.notaService.obtenerNotas();
  }

  eliminarNota(index: number): void {
    this.notaService.eliminarNota(index);
    this.notas = this.notaService.obtenerNotas();
  }
}
