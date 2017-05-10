import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServicioService } from '../lista/servicio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs/Rx';
import { Oferta } from '../lista/oferta';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit, OnDestroy {
  formularioOferta: FormGroup;
  private subscripcion: Subscription;
  private esNueva = true;
  private oferta: Oferta;
  private ofertaIndice: number;

  constructor(private route: ActivatedRoute, private servicioService: ServicioService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.subscripcion = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.esNueva = false;
          this.ofertaIndice = params['id'];
          this.oferta = this.servicioService.getOferta(this.ofertaIndice);
        } else {
          this.esNueva = true;
          this.oferta = null;
        }
        this.inicializarFormulario();
      }
    );
  }

  ngOnDestroy() {
    this.subscripcion.unsubscribe();
  }

  enviarFormulario() {
    const ofertaNueva = this.formularioOferta.value;
    if (this.esNueva) {
      this.servicioService.anadirOferta(ofertaNueva);
    } else {
      this.servicioService.editarOferta(this.oferta, ofertaNueva);
    }
    this.volver();
  }

  cancelar() {
    this.volver();
  }

  private inicializarFormulario() {
    let nombreOferta = '';
    let imagenurlOferta = '';
    let puestoOferta = '';
    let fechaOferta = '';
    let provinciaOferta = '';
    let salarioOferta = '';
    let experienciaOferta = '';
    let contratoOferta = '';
    let requisitosOferta = '';
    let descripcioncortaOferta = '';
    let descripcionOferta = '';
    let vacantesOferta = '';
    let horarioOferta = '';
    let estudiosOferta = '';
    let otrosOferta = '';

    if (!this.esNueva) {
        nombreOferta = this.oferta.nombre;
        imagenurlOferta = this.oferta.imagenurl;
        puestoOferta = this.oferta.puesto;
        fechaOferta = this.oferta.fecha;
        provinciaOferta = this.oferta.provincia;
        salarioOferta = this.oferta.salario;
        experienciaOferta = this.oferta.experiencia;
        contratoOferta = this.oferta.contrato;
        requisitosOferta = this.oferta.requisitos;
        descripcioncortaOferta = this.oferta.descripcioncorta;
        descripcionOferta = this.oferta.descripcion;
        vacantesOferta = this.oferta.vacantes;
        horarioOferta = this.oferta.horario;
        estudiosOferta = this.oferta.estudios;
        otrosOferta = this.oferta.otros;

    }
    this.formularioOferta = this.formBuilder.group({
      nombre: [nombreOferta, Validators.required],
      imagenurl: [imagenurlOferta, Validators.required],
      puesto: [puestoOferta, Validators.required],
      fecha: [fechaOferta, Validators.required],
      provincia: [provinciaOferta, Validators.required],
      salario: [salarioOferta, Validators.required],
      experiencia: [experienciaOferta, Validators.required],
      contrato: [contratoOferta, Validators.required],
      requisitos: [requisitosOferta, Validators.required],
      descripcion: [descripcionOferta, Validators.required],
      descripcioncorta: [descripcioncortaOferta, Validators.required],
      vacantes: [vacantesOferta, Validators.required],
      horario: [horarioOferta, Validators.required],
      estudios: [estudiosOferta, Validators.required],
      otros: [otrosOferta, Validators.required]
    })
  }

  private volver() {
    this.router.navigate(['/global','lista']);
  }

}


