import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clientegym } from './clientegym.model';

@Injectable({
  providedIn: 'root'
})
export class ClientegymService {

  private apiUrl = 'http://localhost:8099/clientegym';

  constructor(private http: HttpClient) { }
  obtenerClientegyms(): Observable<Clientegym[]> {
    return this.http.get<Clientegym[]>(this.apiUrl);
  }
}
