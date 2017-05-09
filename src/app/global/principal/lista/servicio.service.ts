import { Injectable, OnInit } from '@angular/core';
import { Oferta } from './oferta';
// import { EditarComponent } from '../editar/editar.component';


@Injectable()
export class ServicioService implements OnInit {


public ofertas: Array<Oferta> = [new Oferta ('Mercadona','https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQZvuYEQZD9xTWmKdrFSNyo_ZFB6v9bn_1C22Tu2vhND6heHvXW' ,'Programador junior', '06/05/2017', 'Madrid', 'A determinar', 'Menos de 1 año', 'Prácticas', 'HTML / CSS / Jquery / Angular / Javascript', 'La persona interesada será responsable de:Control de cambios, mantenimiento de los diferentes sistemas del área tecnológica, realizar tareas propias de migración de versiones de software entre los distintos entornos productivos, apoyo y mantenimiento de la provisión de fijo y móvil en departamento de producción.En el Plan de Crecimiento y Expansión del Grupo, buscamos incorporar un PROGRAMADOR JUNIOR PL/SQL, para un proyecto innovador para un importante cliente del sector de las telecomunicaciones.', '2', 'Jornada completa', 'Ingenieria Técnica', 'Persona proactiva'),new Oferta ('Ibermática','http://www.ibermatica.com/sites/default/files/logo_2_1.png', 'Programador','06/05/2017', 'Navarra', '18.000 - 24.000 br/año', 'Menos de 3', 'Indefinido', 'HTML / CSS / Jquery / Angular / Javascript', 'Desarrollo de aplicaciones tanto Front como Back end', '3', 'Jornada completa', 'Ingenieria Técnica', 'Persona proactiva'),new Oferta ('Smartclip','https://s3-eu-west-1.amazonaws.com/www.jobfluent.com/company_logos/9/8/9/989_170_31.png', 'Programador','08/05/2017', 'Pozuelo de Alarcón (Madrid)', '12.000-18.000 br/año', 'Sin experiencia', 'Indefinido', 'JavaScript / Jquery / HTML5 / CSS3 /Photoshop /Ilustrator ', 'Somos una reconocida empresa especializada en Publicidad online, damos servicio a agencias y anunciantes en todo el mundo, proporcionando soluciones personalizadas y productos innovadores, distribuidos en múltiples pantallas, a través de una única plataforma. Si tienes ganas de desarrollar tu carrera profesional en el sector de la publicidad digital ésta es tu empresa.Buscamos a una persona dinámica, con inquietudes, ganas de marcar la diferencia con su trabajo y muchas, muchas ganas de aprender.Esta persona dará apoyo con la producción de piezas rich-media y participará en la creación de plantillas para nuevos formatos creativos que se servirán en nuestro network.Trabajará para múltiples anunciantes de sectores muy diversos: ocio y cultura, automoción, alimentación, servicios…', '3', 'Jornada completa', 'Ingenieria Técnica', 'Persona proactiva'),
];
public detalle: number;
public oferta2: Oferta;

  ngOnInit() {
  }

  constructor() { }

  anadirOferta(item: Oferta) {
    this.ofertas.push(item);
  }

    editarOferta(item: Oferta) {
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

