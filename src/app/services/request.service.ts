
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Libro } from '../interfaces/Libro.interface';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private baseUrl = 'http://localhost:5001'; 

  constructor(private http: HttpClient) {}

  getLibros(): Observable<Libro[]> {
    const url = `${this.baseUrl}/libros`; 
    return this.http.get<Libro[]>(url);
  }

  getPersonajes(): Observable<any[]> {
    const url = `${this.baseUrl}/personajes`; 
    return this.http.get<any[]>(url);
  }

  getPersonajeById(id: string): Observable<any> {
    const url = `${this.baseUrl}/personajes/detalle/${id}`;
    return this.http.get<any>(url);
  }

  getCasas(): Observable<any[]> {
    const url = `${this.baseUrl}/casas`; 
    return this.http.get<any[]>(url);
  }

  getMateriales(): Observable<any[]> {
    const url = `${this.baseUrl}/materiales`;
    return this.http.get<any[]>(url);
  }

  getSangres(): Observable<any[]> {
    const url = `${this.baseUrl}/sangres`;
    return this.http.get<any[]>(url);
  }

  getUsuarios(): Observable<any[]> {
    const url = `${this.baseUrl}/users`; 
    return this.http.get<any[]>(url);
  }
}

