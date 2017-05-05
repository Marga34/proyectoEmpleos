import { Component, OnInit, Input } from '@angular/core';
import { Oferta } from '../oferta';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';


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
