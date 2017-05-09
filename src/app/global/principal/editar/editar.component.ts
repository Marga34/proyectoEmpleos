import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Oferta } from '../lista/oferta';
import { ServicioService } from '../lista/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  miFormulario: FormGroup;
  ofertas: Array<Oferta> = [];
  
  constructor(private formBuilder: FormBuilder, public servicioService: ServicioService, private router: Router) { }

nombreNuevo = this.servicioService.oferta2.nombre;
puestoNuevo = this.servicioService.oferta2.puesto;


 editarDato(nombre: string, imagenurl:string, puesto: string, fecha: string, provincia: string, salario: string, experiencia: string, contrato: string, requisitos: string, descripcion: string, vacantes: string, horario: string, estudios: string, otros: string){
  this.servicioService.editarOferta( new Oferta(nombre,imagenurl, puesto, fecha, provincia, salario, experiencia, contrato, requisitos, descripcion, vacantes, horario, estudios, otros));
  this.router.navigate(['global', 'lista'])
 }


  ngOnInit() {
  }

}
