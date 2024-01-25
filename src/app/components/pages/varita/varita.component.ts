import { Component, OnInit, EventEmitter, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-varita',
  templateUrl: './varita.component.html',
  styleUrls: ['./varita.component.scss']
})
export class VaritaComponent implements OnInit {
  constructor(private requestService: RequestService) {}

  router = inject(Router);

  listaMateriales!: any[];
  selectedMadera: string = '';
  selectedNucleo: string = '';
  selectedLongitud: string = '';
  selectedFlexibilidad: string = '';

  getAllMateriales() {
    this.requestService.getMateriales().subscribe({
      next: (response) => {
        this.listaMateriales = response;
      }
    });
  }

  ngOnInit() {
    this.getAllMateriales();
  }

  enviarDatos() {
    const materialesSeleccionados = {
      madera: this.selectedMadera,
      nucleo: this.selectedNucleo,
      longitud: this.selectedLongitud,
      flexibilidad: this.selectedFlexibilidad
    };
    const materialesString = JSON.stringify(materialesSeleccionados);
    localStorage.setItem('materiales', materialesString);
    this.router.navigate(['/miarea'])
  }
}
