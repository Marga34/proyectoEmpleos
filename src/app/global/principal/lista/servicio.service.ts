import { Injectable, OnInit } from '@angular/core';
import { Oferta } from './oferta';
// import { EditarComponent } from '../editar/editar.component';


@Injectable()
export class ServicioService implements OnInit {


public ofertas: Array<Oferta> = [new Oferta ('Microsoft','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo_4lwhVXupxJfX3mYK2EW0frWEfGzjwBIcgLb5CiFMX2PRLXnuA' ,'Programador junior', '11/05/2017', 'Madrid', 'A determinar', 'Menos de 1 año', 'Prácticas', 'HTML / CSS / Jquery / Angular / Javascript', 'La persona interesada será responsable de:Control de cambios, mantenimiento de los diferentes sistemas del área tecnológica, realizar tareas propias de migración de versiones de software entre los distintos entornos productivos, apoyo y mantenimiento de la provisión de fijo y móvil en departamento de producción.En el Plan de Crecimiento y Expansión del Grupo, buscamos incorporar un PROGRAMADOR JUNIOR PL/SQL, para un proyecto innovador para un importante cliente del sector de las telecomunicaciones.', '2', 'Jornada completa', 'Ingenieria Técnica', 'Persona proactiva'), new Oferta ('Telefónica','http://iestatic.net/infoempleo.empresas/images/logos/TELEFONICA.gif', 'Diseñador Maquetador Web','10/05/2017', 'Barcelona', '18.000 - 24.000 br/año', 'Menos de 3', 'Indefinido', 'HTML5 / CSS3 / Wordpress / SEO /  IU  /  Javascript', 'Empresa de diseño y desarrollo web puntera con mas de 16 años en el sector busca:Diseñador Web HTML5, CSS3 para creación y/o mantenimiento de webs.Altos conocimientos de programas de paquete adobe.  Imprescindible la presentación de un listado de trabajos web realizados.', '1', 'Flexibilidad horaria', 'Otros cursos y formación no reglada', 'Imprescindible gusto y rapidez en el diseño'), new Oferta ('Ibermática','http://www.ibermatica.com/sites/default/files/logo_2_1.png', 'Desarrollador Web','10/05/2017', 'Navarra', '18.000 - 24.000 br/año', 'Menos de 3', 'Indefinido', 'HTML / CSS / Jquery / Angular / Javascript', 'Desarrollo de aplicaciones tanto Front como Back end', '3', 'Jornada completa', 'Ingenieria Técnica', 'Flexibilidad horaria y organizativa'),new Oferta ('Smartclip','https://s3-eu-west-1.amazonaws.com/www.jobfluent.com/company_logos/9/8/9/989_170_31.png', 'Programador','08/05/2017', 'Pozuelo de Alarcón (Madrid)', '12.000-18.000 br/año', 'Sin experiencia', 'Indefinido', 'JavaScript / Jquery / HTML5 / CSS3 /Photoshop /Ilustrator ', 'Somos una reconocida empresa especializada en Publicidad online, damos servicio a agencias y anunciantes en todo el mundo, proporcionando soluciones personalizadas y productos innovadores, distribuidos en múltiples pantallas, a través de una única plataforma. Si tienes ganas de desarrollar tu carrera profesional en el sector de la publicidad digital ésta es tu empresa.Buscamos a una persona dinámica, con inquietudes, ganas de marcar la diferencia con su trabajo y muchas, muchas ganas de aprender.Esta persona dará apoyo con la producción de piezas rich-media y participará en la creación de plantillas para nuevos formatos creativos que se servirán en nuestro network.Trabajará para múltiples anunciantes de sectores muy diversos: ocio y cultura, automoción, alimentación, servicios…', '3', 'Jornada completa', 'Ingenieria Técnica', 'Persona proactiva'),new Oferta ('Billin','https://s3-eu-west-1.amazonaws.com/www.jobfluent.com/company_logos/7/0/4/704_170_122.png', 'Programador senior','05/05/2017', 'Barcelona', '24.000 - 30.000 br/año', 'Más de 5 años', 'A determinar', 'HTML / CSS / Jquery / Angular / Javascript', 'En Billin estamos buscando un Senior Frontend Developer para que se una a nuestro equipo. Nuestro stack es puramente Javascript (ES6). Usamos NodeJS con Express y GraphQL en el backend. En el frontend usamos ReactJS y Redux como contenedor de aplicaciones. Somos amantes del Clean Code y las buenas prácticas, y buscamos a alguien que quiera trabajar construyendo un producto increíble.', '1', 'Jornada completa', 'Ingenieria', ' React/Redux, Sagas o con NodeJS y Express'),              new Oferta ('Dive.tv','https://s3-eu-west-1.amazonaws.com/www.jobfluent.com/company_logos/1/1/0/1109_123_61_original.png', 'Técnico de Soporte Web','05/05/2017', 'Madrid', 'No disponible', 'Al menos 1 año', 'A determinar', 'Swift / REST  /  Auto-layout  / x-Code  /  Git  / Json', 'Participará en el desarrollo de nuestra aplicación Dive en iOS junto con los equipos de UX y BackEnd,mantener y mejorar la calidad del código,estará involucrado en la toma de decisiones respecto a la arquitectura de la aplicación.Si eres cinéfilo, te encantará descubrir las curiosidades que se esconden en los fotogramas, podrás desarrollar tu trabajo en un ámbito tan apasionante como es el cine.', '1', 'Jornada completa', 'Ingenieria', 'ObjetiveC, certificados de Apple, iTunesConnect, CocoaPods, Metodologías Agile'),new Oferta ('Digital Training','http://grupodigital.eu/wp-content/uploads/2012/10/grupo-digital-logo.jpg' ,'Programador junior', '11/05/2017', 'Madrid', 'A determinar', 'Al menos 1 año', 'Prácticas', 'XML/HTML, Javascript, PHP , arquitectura LAMP, Wordpress, Joomla y Java', 'Buscamos un técnico de soporte web para un proyecto estable en Madrid.Somos un grupo de empresas tecnológicas, formado actualmente por unos 400 profesionales, en distintas áreas: desarrollo, sistemas, ingeniería automática, consultoría.Para el área de sistemas, y para uno de nuestros proyectos con importante multinacional de primerísimo nivel, necesitamos incorporar el siguiente perfil', '1', 'Jornada completa', 'Formación Profesional Grado Superior', 'Detalles en entrevista personal'), new Oferta ('Boycor ','https://www.infojobs.net/logo/logo/do-get.xhtml?id=10689300722&dgv=6603578520717962928' ,'Maquetador Web', '25/04/2017', 'Mirasierra (Madrid)', 'al menos 3 años', '24.000€ - 30.000€ bruto/año', 'Indefinido', 'HTML5  /  CSS3  /  Javascript  /  Bootstrap', 'Actualmente buscamos un MAQUETADOR WEB para incorporarse en puesto estable a cliente IT con oficinas en la zona de Mirasierra (Madrid).', '1', 'Jornada completa', 'Formación Profesional Grado Medio', 'Detalles en entrevista personal'),
new Oferta ('Everis ','https://media.infojobs.net/corp/everis2_logo.gif' ,'Arquitectos Front End', '25/04/2017', 'Mirasierra (Madrid)', 'al menos 1 año', 'A determinar', 'Indefinido', 'HTML5  /  CSS3  /  Javascript  /  Bootstrap  / Ajax  / Angular JS  /  Node JS', 'Estamos buscando a los mejores profesionales para incorporarse a tiempo completo a nuestra línea de servicios de Arquitectura, dentro del equipo de expertos en tecnología Web Single Page Interface como (AngularJS, React,...), con capacidad full-stack para definir e implementar también la parte correspondiente del Back (API Management, NodeJS, Spring Framework...).', '1', 'Jornada completa', 'Formación Profesional Grado Superior - Informática', 'Detalles en entrevista personal'), new Oferta ('Aratech','http://www.ara-tech.es/wp-content/uploads/2015/05/logo_aratech_PT.jpg', 'Programador','11/05/2017', 'Tres Cantos (Madrid)', '18.000 - 24.000 br/año', 'Menos de 3 años', 'Indefinido', 'JavaScript / JQuery / HTML5 / CSS3', 'Somos una compañía tecnológica de ámbito internacional. Buscamos profesionales con perfil de Programador y Analista Programador en tecnologías Java/J2EE para incorporarse en varios de nuestros clientes más importantes que se encuentran en pleno proceso de Transformación Digital.', '8', 'Jornada completa', 'Ingenieria Técnica', 'Persona dinámica'),
];
public detalle: number;
public oferta2: Oferta;

  ngOnInit() {
  }

  constructor() { }

  anadirOferta(item: Oferta) {
    this.ofertas.push(item);
  }

  //   editarOferta(item: Oferta) {
  //   this.ofertas.push(item);
  // }

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

getOferta(posicion: number) {
  return this.ofertas[posicion];
}
editarOferta(ofertaVieja: Oferta, ofertaNueva: Oferta) {
  this.ofertas[this.ofertas.indexOf(ofertaVieja)] = ofertaNueva;
}

}

