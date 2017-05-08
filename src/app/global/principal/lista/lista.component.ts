import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServicioService } from './servicio.service';
import { Oferta } from './oferta';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})


export class ListaComponent implements OnInit {

  nombre: string;
  subscripcion: Subscription;
  ofertas: Array<Oferta> = [];

  constructor(private router: Router, private servicioService: ServicioService, private activatedRoute: ActivatedRoute) {
    this.subscripcion = this.activatedRoute.params.subscribe(
      params => this.nombre = params['nombre']
    );
   }

  ngOnInit() {
    this.ofertas = this.servicioService.devolverOferta();
  }

  navegarAlDescr() {
    this.router.navigate(['descr']);
  }

  guardarDato(id:number, nombre: string, puesto: string, resumen:string, expandido:string){
    this.servicioService.anadirOferta(new Oferta(id, nombre, puesto, resumen, expandido));
  }


}
