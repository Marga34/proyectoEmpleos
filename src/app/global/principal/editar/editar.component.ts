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

  ngOnDestroy(){
    this.subscripcion.unsubscribe();
  }

  enviarFormulario(){
    const ofertaNueva = this.formularioOferta.value;
    if(this.esNueva) {
      this.servicioService.anadirOferta(ofertaNueva);
    } else {
      this.servicioService.editarOferta(this.oferta, ofertaNueva);
    }
    this.volver();
  }

  cancelar(){
    this.volver();
  }

  private inicializarFormulario(){
    let nombreOferta = '';
    let puestoOferta = '';
    let provinciaOferta = '';
    let descripcionOferta = '';

    if (!this.esNueva) {
    nombreOferta = this.oferta.nombre;
    puestoOferta = this.oferta.puesto;
    provinciaOferta = this.oferta.provincia;
    descripcionOferta = this.oferta.descripcion;
  }
  this.formularioOferta = this.formBuilder.group({
    nombre: [nombreOferta, Validators.required],
    puesto: [puestoOferta, Validators.required],
    provincia: [provinciaOferta, Validators.required],
    descripcion: [descripcionOferta, Validators.required]
  })
}

private volver(){
  this.router.navigate(['../']);
}

}
