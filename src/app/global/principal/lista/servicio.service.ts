import { Injectable, OnInit } from '@angular/core';
import { Oferta } from './oferta';


@Injectable()
export class ServicioService implements OnInit {


private ofertas: Array<Oferta> = [new Oferta ('Mercadona', '4hffjjf', 'Programador'), new Oferta ('Samsung', '4hffjjf', 'Programador'),new Oferta ('Apple', '4hffjjf', 'Programador')];


ngOnInit() {
}

constructor() { }

anadirOferta(item: Oferta){
this.ofertas.push(item);
}

devolverOferta(): Array<Oferta>{
  return this.ofertas;
}

}

