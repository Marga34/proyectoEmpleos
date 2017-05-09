import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Oferta } from '../lista/oferta';
import { ServicioService } from '../lista/servicio.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  miFormulario: FormGroup;
  ofertas: Array<Oferta> = [];

  constructor(private formBuilder: FormBuilder, public servicioService: ServicioService, private router: Router) {
    this.miFormulario = new FormGroup({
      'nombre': new FormControl(),
      'imagen': new FormControl(),
      'puesto': new FormControl(),
      'fecha': new FormControl(),
      'provincia': new FormControl(),
      'salario': new FormControl(),
      'experiencia': new FormControl(),
      'contrato': new FormControl(),
      'requisitos': new FormControl(),
      'descripcion': new FormControl(),
      'vacantes': new FormControl(),
      'horario': new FormControl(),
      'estudios': new FormControl(),
      'otros': new FormControl()
    });


  }
   guardarDato() {

  //  var idNueva = this.servicioService.ofertas.length;

//  guardarDato(nombre: string, imagenurl:string, puesto: string, fecha: string, provincia: string, salario: string, experiencia: string, contrato: string, requisitos: string, descripcion: string, vacantes: string, horario: string, estudios: string, otros: string){
//   this.servicioService.anadirOferta( new Oferta(nombre,imagenurl, puesto, fecha, provincia, salario, experiencia, contrato, requisitos, descripcion, vacantes, horario, estudios, otros));

//    this.router.navigate(['global', 'lista']);

//  }

   this.servicioService.anadirOferta(this.miFormulario.value);

   /*
   new Oferta( this.miFormulario.controls['nombre'], this.miFormulario.controls['imagenurl'], this.miFormulario.controls['puesto'], this.miFormulario.controls['fecha'], this.miFormulario.controls['provincia'], this.miFormulario.controls['salario'], this.miFormulario.controls['experiencia'], this.miFormulario.controls['contrato'], this.miFormulario.controls['requisitos'], this.miFormulario.controls['descripcion'], this.miFormulario.controls['vacantes'], this.miFormulario.controls['horario'], this.miFormulario.controls['estudios'], this.miFormulario.controls['otros'])
   */
  }

    //   guardarDato(password: number, nombre: string, puesto: string, fecha: string, provincia: string, salario: string, experiencia: string, contrato: string, requisitos: string, descripcion: string, vacantes: string, horario: string, estudios: string, otros: string){

    //    var idNueva = this.servicioService.ofertas.length;
    //   this.servicioService.anadirOferta( new Oferta(password, nombre, puesto, fecha, provincia, salario, experiencia, contrato, requisitos, descripcion, vacantes, horario, estudios, otros));
    //  }

    // guardarDato(){
    //   console.log(this.miFormulario);
    // }

    navegarAlaLista() {
      this.router.navigate(['global', 'lista']);
    }

    ngOnInit() {
    }


  }
