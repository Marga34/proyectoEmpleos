import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navegarAlDescr(){
    this.router.navigate(['descr']);
  }

}
