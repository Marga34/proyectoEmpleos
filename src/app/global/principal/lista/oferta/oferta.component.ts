import { Component, OnInit, Input } from '@angular/core';
import { Oferta } from '../oferta';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import {ServicioService} from '../servicio.service'


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {

  @Input() oferta: Oferta;

  constructor(public servicioService:ServicioService) { }

  ngOnInit() {
  }

  mirarOferta(ocupa: number){
    this.servicioService.detalleOferta(ocupa);
  }

}
