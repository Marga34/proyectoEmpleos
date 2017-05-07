import { Injectable, OnInit } from '@angular/core';
import { Oferta } from './oferta';


@Injectable()
export class ServicioService implements OnInit {


public ofertas: Array<Oferta> = [new Oferta (0, 'Mercadona', 'Programador', 'Mercadona es una compañía de supermercados', 'Mercadona es una compañía de supermercados, de capital español y familiar, que tiene por objetivo ofrecer las mejores soluciones en alimentación, higiene personal y cuidado del hogar y mascotas a sus clientes. Fundada en 1977 por el Grupo Cárnicas Roig, Mercadona es líder del segmento de supermercados en España.'), 
new Oferta (1, 'Samsung', 'Programador',  'es un conglomerado de empresas multinacionales con sede en Seúl, Corea del Sur.', 'Desde su fundación en la localidad coreana de Suwon en 1969, Samsung Electronics se ha convertido en una multinacional de la tecnología líder en todo el mundo, con más de 200 filiales. Entre su cartera de productos destacan televisores, monitores, tales como frigoríficos y lavadoras, así como modernos dispositivos de telecomunicaciones, como smartphones y tabletas. Samsung también lidera la fabricación de importantes componentes electrónicos, entre los que destacan los módulos de memoria DRAM y los semiconductores.Samsung tiene el objetivo de crear y comercializar productos y servicios que permitan aumentar la calidad de vida de sus clientes de todo el mundo. Además, tiene el firme compromiso de mejorar la sociedad en general con su búsqueda constante de innovaciones revolucionarias y la creación de valor.'),


new Oferta (2, 'Apple', 'Programador', 'Las mejores herramientas para el trabajo son las que ya te gusta usar.','Las mejores herramientas para el trabajo son las que ya te gusta usar. Desde siempre, Apple ha diseñado sus productos pensando no solo en cómo vivimos, sino también en cómo trabajamos.')];
public detalle: number;

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

detalleOferta(lugar: number) {
  return this.detalle = lugar;
}

}

