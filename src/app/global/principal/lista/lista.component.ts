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

  guardarDato(dato1:number, dato2:string, dato3:string, dato4:string, dato5:string, dato6:string){
    this.servicioService.anadirOferta(new Oferta (dato1, dato2, dato3, dato4, dato5, dato6));
  }

}
