import { Oferta } from './oferta';
export class ServicioService {
ofertas: Array<Oferta> = [];

constructor() { }

anadirOferta(item: Oferta){
this.ofertas.push(item);
}

devolverOferta(): Array<Oferta>{
  return this.ofertas;
}
}
