import { Component, OnInit } from '@angular/core';
import {ServicioService} from '../lista/servicio.service';

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
mostrar2 = this.servicioService.ofertas[this.servicioService.detalle].imagenurl;
mostrar3 = this.servicioService.ofertas[this.servicioService.detalle].puesto;
mostrar4 = this.servicioService.ofertas[this.servicioService.detalle].fecha;
mostrar5 = this.servicioService.ofertas[this.servicioService.detalle].provincia;
mostrar6 = this.servicioService.ofertas[this.servicioService.detalle].salario;
mostrar7 = this.servicioService.ofertas[this.servicioService.detalle].experiencia;
mostrar8 = this.servicioService.ofertas[this.servicioService.detalle].contrato;
mostrar9 = this.servicioService.ofertas[this.servicioService.detalle].requisitos;
mostrar10 = this.servicioService.ofertas[this.servicioService.detalle].descripcion;
mostrar11 = this.servicioService.ofertas[this.servicioService.detalle].vacantes;
mostrar12 = this.servicioService.ofertas[this.servicioService.detalle].horario;
mostrar13 = this.servicioService.ofertas[this.servicioService.detalle].estudios;
mostrar14 = this.servicioService.ofertas[this.servicioService.detalle].otros;
}
