import { Component, OnInit, Input } from '@angular/core';
import { Oferta } from '../oferta';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { ServicioService } from '../servicio.service';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';



@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {

  @Input() oferta: Oferta;


  constructor(private servicioService: ServicioService) { }


  ngOnInit() {
  }


  eliminaOferta() {
    this.servicioService.borraOferta(Input);
  }

  mirarOferta(ocupa: number) {
    this.servicioService.detalleOferta(ocupa);
  }
}
