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

  ofertas: Array<Oferta> = [];

  constructor(private router: Router, private servicioService: ServicioService) { }

  ngOnInit() {
    this.ofertas = this.servicioService.devolverOferta();
  }


  navegarAlDescr() {
    this.router.navigate(['descr']);
  }

}
