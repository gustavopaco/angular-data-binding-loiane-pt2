import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url : string = "http://loaine.com";
  cursoAngular : boolean = true;
  urlImage : string = "https://lorempixel.com/400/200/nature/";

  constructor() { }

  ngOnInit(): void {
  }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }
}
