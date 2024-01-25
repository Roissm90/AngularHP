import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav-casas',
  templateUrl: './nav-casas.component.html',
  styleUrls: ['./nav-casas.component.scss']
})
export class NavCasasComponent {
  @Input() listaCasas!: any[];
  @Output() casaSeleccionada: EventEmitter<any> = new EventEmitter<any>();

  seleccionarCasa(casa: any) {
    this.casaSeleccionada.emit(casa);
  }
}
