import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from './servicio.service';
import { Oferta } from './oferta';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

items: Array<Oferta> = [];  
  constructor(private router: Router, private ServicioService: ServicioService) { }

  ngOnInit() {
    this.items = this.ServicioService.devolverOferta();
  }

  navegarAlDescr(){
    this.router.navigate(['descr']);
  }

  guardarDato(dato1:number, dato2:string, dato3:string, dato4:string, dato5:string, dato6:string){
    this.ServicioService.anadirOferta(new Oferta (dato1, dato2, dato3, dato4, dato5, dato6));
  }

}
