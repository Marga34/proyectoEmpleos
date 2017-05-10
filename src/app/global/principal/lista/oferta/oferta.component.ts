import { Component, OnInit, Input } from '@angular/core';
import { Oferta } from '../oferta';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { ServicioService } from '../servicio.service';
import { EditarComponent } from '../../editar/editar.component';



@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {

  @Input() oferta: Oferta;
  @Input() posicion: number;
  @Input() check: boolean;
  @Input() check2: boolean;


  constructor(public servicioService: ServicioService, private router: Router) { }


  ngOnInit() {
  }


  eliminaOferta(oferta) {
    this.servicioService.borraOferta(oferta);
  }

  mirarOferta(ocupa: number) {
    this.servicioService.detalleOferta(ocupa);
  }

  navegarEditar(oferta){
    this.router.navigate(['global', 'editar',this.posicion]);
  }

}
