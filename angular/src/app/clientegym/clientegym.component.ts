import { Component, OnInit } from '@angular/core';
import { Clientegym } from './clientegym.model';
import { CommonModule } from '@angular/common';
import { ClientegymService } from './clientegym.service';

@Component({
  selector: 'app-clientegym',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clientegym.component.html',
  styleUrls: ['./clientegym.component.css']
})
export class ClientegymComponent implements OnInit {
  clientegyms: Clientegym[] = [];

  constructor(private clienteService: ClientegymService) {
    this.clientegyms = [];
  }

  ngOnInit(): void {
    this.obtenerClientegyms();
  }

  obtenerClientegyms(): void {
    this.clienteService.obtenerClientegyms()
      .subscribe(clientegyms => this.clientegyms = clientegyms);
  }
}
