import { Component, OnInit } from '@angular/core';
import {ServicioService} from '../lista/servicio.service'

@Component({
  selector: 'app-descr',
  templateUrl: './descr.component.html',
  styleUrls: ['./descr.component.css']
})
export class DescrComponent implements OnInit {

  constructor(public servicioService: ServicioService) { }

  ngOnInit() {
  }
mostrar1 = this.servicioService.ofertas[this.servicioService.detalle].nombre;
mostrar2 = this.servicioService.ofertas[this.servicioService.detalle].puesto;
mostrar3 = this.servicioService.ofertas[this.servicioService.detalle].expandido;
}
