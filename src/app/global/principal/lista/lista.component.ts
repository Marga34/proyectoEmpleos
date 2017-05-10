import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServicioService } from './servicio.service';
import { Oferta } from './oferta';
import { Subscription } from 'rxjs/Rx';
import {FiltroComponent} from './filtro/filtro.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})


export class ListaComponent implements OnInit {

  nombre: string;
  subscripcion: Subscription;
  ofertas: Array<Oferta> = [];
  check:boolean;
  check2:boolean;
  

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

  // guardarDato(id:number, nombre: string, puesto: string, resumen:string, expandido:string){
  //   this.servicioService.anadirOferta(new Oferta(id, nombre, puesto, resumen, expandido));
  // }

guardarDato(nombre: string, imagenurl:string, puesto: string, fecha: string, provincia: string, salario: string, experiencia: string, contrato: string, requisitos: string, descripcioncorta: string, descripcion: string, vacantes: string, horario: string, estudios: string, otros: string) {
    this.servicioService.anadirOferta (new Oferta( nombre,imagenurl, puesto, fecha, provincia, salario, experiencia, contrato, requisitos, descripcioncorta, descripcion, vacantes, horario, estudios, otros));

}

cambiado(check:boolean){
  this.check= check;
}

cambiado2(check2:boolean){
  this.check2= check2;
}


}