import { Injectable, OnInit } from '@angular/core';
import { Oferta } from './oferta';


@Injectable()
export class ServicioService implements OnInit {

private ofertas: Array<Oferta> = [new Oferta (1, 'Mercadona', 'Programador', 'Almeria', 'Sin Experiencia', 'Temporal'),new Oferta (2, 'Samsung', 'Big Data', 'Madrid', 'Con Experiencia', 'Indefinido'), new Oferta (3, 'Apple', 'Web Designer', 'Toledo', 'Freelance', 'Indefinido')];

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

