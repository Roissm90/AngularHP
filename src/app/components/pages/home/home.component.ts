import { Component, OnInit } from '@angular/core';
import { Libro } from '../../../interfaces/Libro.interface';

import { RequestService } from '../../../services/request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  listaLibros!: Libro[]
  
  constructor(
    private requestService: RequestService
  ) {}

  getAllLibros() {
    this.requestService.getLibros().subscribe({
      next: (response) => {
        this.listaLibros = response;
        //console.log(this.listaLibros)
      }
    });
  }

  ngOnInit() {
    this.getAllLibros();
  }
}
