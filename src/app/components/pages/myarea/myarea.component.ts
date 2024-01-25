import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myarea',
  templateUrl: './myarea.component.html',
  styleUrls: ['./myarea.component.scss']
})
export class MyareaComponent implements OnInit {
  materiales: any = {};
  user: any = {};
  
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('authUser');
    localStorage.removeItem('materiales');
    this.router.navigate(['']);
  }

  cogerUser() {
    const userString = localStorage.getItem('authUser');
    //console.log(userString)

    if (userString) {
      this.user = JSON.parse(userString);
    } else {
      //console.log('No hay usuarios almacenados en el localStorage.');
    }
  }

  cogerMateriales() {
    const materialesString = localStorage.getItem('materiales');
    
    if (materialesString) {
      this.materiales = JSON.parse(materialesString);
    } else {
      //console.log('No hay materiales almacenados en el localStorage.');
    }
  }

  ngOnInit() {
    this.cogerMateriales();
    this.cogerUser();
    //console.log(this.materiales)
    //console.log(this.user)
  }
}
