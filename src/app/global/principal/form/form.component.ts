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
      'descripcioncorta': new FormControl(),
      'descripcion': new FormControl(),
      'vacantes': new FormControl(),
      'horario': new FormControl(),
      'estudios': new FormControl(),
      'otros': new FormControl()

    });


  }
   guardarDato() {

   this.servicioService.anadirOferta(this.miFormulario.value);
  }

    navegarAlaLista() {
      this.router.navigate(['global', 'lista']);
    }

    ngOnInit() {
    }



  }
