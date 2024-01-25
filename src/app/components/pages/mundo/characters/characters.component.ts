import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {
  @Input() listaPersonajes: any[] = [];
  @Input() listaCasas: any[] = [];
  @Input() listaSangres: any[] = [];

  searchTerm: string = ''; // Modelo para el término de búsqueda
  selectedHouse: string = ''; // Variable para almacenar la casa seleccionada

  // Método para filtrar la lista de personajes según el término de búsqueda y la casa seleccionada
  filterCharacters(): any[] {
    let filteredCharacters = this.listaPersonajes;
  
    // Filtrar por término de búsqueda
    filteredCharacters = filteredCharacters.filter(character =>
      character.nombre.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  
    // Filtrar por casa seleccionada
    if (this.selectedHouse) {
      filteredCharacters = filteredCharacters.filter(character =>
        character.casaNombre === this.selectedHouse
      );
    }
  
    return filteredCharacters;
  }

  // Función para manejar el clic en un botón de casa
  filterByHouse(casa: string): void {
    this.selectedHouse = casa;
  }
}
