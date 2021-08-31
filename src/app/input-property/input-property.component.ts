import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  // inputs: ["nomeCurso : nome"]  /*Important : Outro metodo de se aplicar inputs sem usar anotacao */
})
export class InputPropertyComponent implements OnInit {

  @Input("nome")
  nomeCurso: String = "";

  constructor() { }

  ngOnInit(): void {
  }

}
