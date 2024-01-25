import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-character',
  templateUrl: './detail-character.component.html',
  styleUrls: ['./detail-character.component.scss']
})
export class DetailCharacterComponent implements OnInit {
  personajeId: any = {};

  constructor(
    private requestService: RequestService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getPersonajeById();
  }

  getExpanded() {
    return this.personajeId.horrocruxes.length > 0 ? '' : 'expanded';
  }

  getPersonajeById() {
    // Obtener el id del personaje de los parámetros de la URL
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    // Verificar si el id no es null antes de hacer la llamada al servicio
    if (id !== null) {
      this.requestService.getPersonajeById(id).subscribe({
        next: (response) => {
          this.personajeId = response;
          console.log(this.personajeId);
        },
        error: (error) => {
          console.error(error);
        }
      });
    } else {
      console.error('El ID del personaje es nulo.');
    }
  }
}
