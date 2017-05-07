import { Injectable, OnInit } from '@angular/core';
import { Oferta } from './oferta';


@Injectable()
export class ServicioService implements OnInit {


  private ofertas: Array<Oferta> = [new Oferta('Mercadona', '4hffjjf', 'Programador'), new Oferta('Samsung', '4hffjjf', 'Big Data'), new Oferta('Apple', '4hffjjf', 'Web Designer'), new Oferta('Telefonica', '4hffjjf', 'Backend Developer')];


  ngOnInit() {
  }

  constructor() { }

  anadirOferta(item: Oferta) {
    this.ofertas.push(item);
  }

  devolverOferta(): Array<Oferta> {
    return this.ofertas;
  }

  borraOferta(oferta) {
    const index: number = this.ofertas.indexOf(oferta);
    if (index !== -1) {
      this.ofertas.splice(index, 1);
    }
  }

}

