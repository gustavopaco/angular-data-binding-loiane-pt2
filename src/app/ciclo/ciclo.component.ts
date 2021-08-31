import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, Input,
  OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input()
  valorInicial : Number = 10;

  constructor() {
    this.log("Construtor");
  }

  ngOnInit(): void {
    this.log("ngOnInit");
  }

  ngDoCheck() {
    this.log("ngDoCheck");
  }

  ngAfterContentInit(): void {
    this.log("ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    this.log("ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    this.log("ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    this.log("ngAfterViewChecked");
  }

  ngOnChanges() {
    this.log("ngOnChanges: " + this.valorInicial)
  }

  ngOnDestroy() {
    this.log("ngOnDestroy");
  }

  private log(hook: String) {
    console.log(hook)
  }
}
