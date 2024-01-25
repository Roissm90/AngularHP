import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../../services/request.service';

@Component({
  selector: 'app-mundo',
  templateUrl: './mundo.component.html',
  styleUrls: ['./mundo.component.scss']
})
export class MundoComponent implements OnInit{
  listaPersonajes: any[] = []
  listaCasas: any[] = []
  listaSangres: any[] = []
  
  constructor(
    private requestService: RequestService
  ) {}

  getAllPersonajes() {
    this.requestService.getPersonajes().subscribe({
      next: (response) => {
        this.listaPersonajes = response;
        //console.log(this.listaPersonajes)
      }
    });
  }

  getAllCasas() {
    this.requestService.getCasas().subscribe({
      next: (response) => {
        this.listaCasas = response;
        //console.log(this.listaCasas)
      }
    });
  }

  getAllSangres() {
    this.requestService.getSangres().subscribe({
      next: (response) => {
        this.listaSangres = response;
        //console.log(this.listaSangres)
      }
    });
  }

  ngOnInit() {
    this.getAllPersonajes();
    this.getAllCasas();
    this.getAllSangres();
  }
}
