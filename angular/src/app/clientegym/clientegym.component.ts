import { Component, OnInit } from '@angular/core';
import { AlumnosComponent } from '../../clientegym/clientegym.component';
import { Clientegym } from './clientegym.model';
import { CommonModule } from '@angular/common';
import { ClientegymService } from './clientegym.service';
@Component({
  selector: 'app-clientegym',
  standalone: true,
  imports: [AlumnosComponent, CommonModule],
  templateUrl: './clientegym.component.html',
  styleUrl: './clientegym.component.css'
})
export class ClientegymComponent implements OnInit  {
  clientegyms: Clientegym[] = [];

  constructor(private clienteService: ClientegymService) {
    this.clientegyms = [];
  }

  ngOnInit(): void {
    this.obtenerClientegym();
  }

  obtenerClientegym(): void {
    this.clienteService.obtenerClientegym()
      .subscribe(this.clientegyms => this.clientegyms = clientegyms);
  }
}
