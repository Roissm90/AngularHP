import { RequestService } from 'src/app/services/request.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-casas',
  templateUrl: './casas.component.html',
  styleUrls: ['./casas.component.scss']
})
export class CasasComponent {
  constructor(
    private requestService: RequestService
  ) {}

  listaCasas!: any[];
  casaMostrada: any;

  getAllCasas() {
    this.requestService.getCasas().subscribe({
      next: (response) => {
        this.listaCasas = response;
        console.log(this.listaCasas);
      }
    });
  }

  ngOnInit() {
    this.getAllCasas();
  }

  mostrarCasa(casa: any) {
    this.casaMostrada = casa;
  }

  getImagenPath(nombreCasa: string): string {
    // Lógica para devolver la ruta de la imagen en función del nombre de la casa
    // Por ejemplo:
    switch (nombreCasa) {
      case 'Gryffindor':
        return '../../../../assets/images/espada.png';
      case 'Hufflepuff':
        return '../../../../assets/images/copa.png';
      case 'Ravenclaw':
        return '../../../../assets/images/diadema.png';
      case 'Slytherin':
        return '../../../../assets/images/guardapelo.png';
      // Agrega más casos según sea necesario
      default:
        return 'ruta/imagen_por_defecto.jpg'; // Ruta de imagen por defecto si el nombre de la casa no coincide con ningún caso
    }
  }
}
