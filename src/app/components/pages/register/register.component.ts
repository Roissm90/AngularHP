import { Component, inject } from '@angular/core';
import { RequestService } from './../../../services/request.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  listaUsuarios!: any[];

  router = inject(Router);

  showLogin: boolean = true;
  showRegister: boolean = false;

  emailLogin: string = '';
  passwordLogin: string = '';

  nameRegister: string = '';
  lastnameRegister: string = '';
  sexoRegister: string = '';
  emailRegister: string = '';
  passwordRegister: string = '';

  showPassword: boolean = false;

  constructor(
    private requestService: RequestService,
    private httpClient: HttpClient
    ) {}

  getAllUsers() {
    this.requestService.getUsuarios().subscribe({
      next: (response) => {
        this.listaUsuarios = response;
        //console.log(this.listaUsuarios);
      }
    });
  }

  toggleForms() {
    this.showLogin = !this.showLogin;
    this.showRegister = !this.showRegister;
  }

  ngOnInit() {
    this.getAllUsers();
  }

  login() {
    const body = { email: this.emailLogin, password: this.passwordLogin };
    //console.log(body)
  
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    this.httpClient.post<any>('http://localhost:5001/users/login', body, { headers })
      .subscribe(
        (response) => {
          // Manejar la respuesta del servidor, por ejemplo, guardar el token de autenticación
          localStorage.setItem('authToken', response.token);
          localStorage.setItem('user', response.user);
          
          const userString = JSON.stringify(response.user);
          localStorage.setItem('authUser', userString);
          
          this.router.navigate(['/miarea'])
        },
        (error) => {
          // Manejar el error
          console.error('Error en la solicitud:', error);
        }
      );
  }

  register() {
    const body = { 
      name: this.nameRegister,
      lastname: this.lastnameRegister,
      sexo: this.sexoRegister,
      email: this.emailRegister,
      password: this.passwordRegister,
      validatePassword: this.passwordRegister
    };

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.httpClient.post<any>('http://localhost:5001/users/register', body, { headers })
      .subscribe(
        (response) => {
          
          console.log(response);
          
          this.router.navigate(['/'])
        },
        (error) => {
          // Manejar el error
          console.error('Error en la solicitud:', error);
        }
      );
      
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
