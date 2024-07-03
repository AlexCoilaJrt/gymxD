import { Component, OnInit } from '@angular/core';
import { Clientegym } from './clientegym.model';
import { ClientegymService } from './clientegym.service';

@Component({
  selector: 'app-clientegym',
  standalone: true,
  templateUrl: './clientegym.component.html',
  styleUrls: ['./clientegym.component.css']
})
export class ClientegymComponent implements OnInit {
  clientegyms: Clientegym[] = [];

  constructor(private clienteService: ClientegymService) {
    this.clientegyms = [];
  }

  ngOnInit(): void {
    this.obtenerClientegym();
  }

  obtenerClientegym(): void {
    this.clienteService.obtenerClientegyms()
      .subscribe(clientegyms => this.clientegyms = clientegyms);
  }
}
