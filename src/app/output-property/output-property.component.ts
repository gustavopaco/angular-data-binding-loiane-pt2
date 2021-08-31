import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input("valorOutPut")
  valor : number;

  @Output()
  mudouValor = new EventEmitter;

  @ViewChild("campoInput")  /* IMPORTANT: Annotation para bindar elemento HTML da pagina*/
  campoValorInput : ElementRef   /* IMPORTANT: Tipo de variavel HTMLElement deve ser usado para checar qual tipo real do component na tela*/

  constructor() {
  }

  ngOnInit(): void {
  }

  incrementa() {
    // this.valor++;
    this.campoValorInput.nativeElement.value++; /* IMPORTANT: Usado para obter o valor de uma variavel criada NO HTML*/
    this.mudouValor.emit({novoValor : this.campoValorInput.nativeElement.value})  /*Important: Pode-se passar tanto um objeto Completo ou somente uma String, Number, qualquer coisa*/
  }

  decrementa() {
    // this.valor--;
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({novoValor : this.campoValorInput.nativeElement.value})  /*Important: Pode-se passar tanto um objeto Completo ou somente uma String, Number, qualquer coisa*/
  }
}
