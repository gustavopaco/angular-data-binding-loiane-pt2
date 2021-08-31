import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url : String = "http://loaine.com";
  cursoAngular : Boolean = true;
  urlImage : String = "https://lorempixel.com/400/200/nature/";
  valorAtual : String = "";
  valorSalvo : String = "";
  focoValor : String;
  isMouseover = false;
  nomeDoCurso: String = "Angular";
  valorInicial : number = 10;

  constructor() { }

  ngOnInit(): void {
  }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert("Botao Clicado!")
  }

  onKeyUp($event: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>$event.target).value;
  }


  salvarValor($event: KeyboardEvent) {
    this.valorSalvo = (<HTMLInputElement>$event.target).value;
  }

  Blur(value: string) {
    this.focoValor = value
  }

  mouseOverInOut() {
    this.isMouseover = !this.isMouseover;
  }

  onMudouValor($event: any) {
    console.info("Output: " + $event.novoValor)
  }

}
