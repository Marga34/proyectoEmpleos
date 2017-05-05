import { Component, OnInit, Input } from '@angular/core';
import { Oferta } from '../oferta';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {

  @Input() oferta: Oferta;

  constructor() { }

  ngOnInit() {
  }

}
