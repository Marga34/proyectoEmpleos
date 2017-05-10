import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {
  @Output() clicked = new EventEmitter<boolean>();
  @Output() clicked2 = new EventEmitter<boolean>();

  constructor(public servicioService: ServicioService) { }

  ngOnInit() {
  }

saveUsername:boolean = false;
saveUsername2:boolean = false;
cambiar(){
 this.saveUsername = !this.saveUsername;
 this.clicked.emit(this.saveUsername);
}

cambiar2(){
 this.saveUsername2 = !this.saveUsername2;
 this.clicked2.emit(this.saveUsername2);
}

}


