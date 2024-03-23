import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor() {
    console.log("AppComponent: Constructors");
  }

  ngOnChanges(){
    console.log("AppComponent: OnChanges");
  }

  ngOnInit(): void{
    console.log("AppComponent: OnInit");
  }

  ngDoCheck(){
    console.log("AppComponent: DoCheck");
  }

  ngAfterContentInit(){
    console.log("AppComponent: AfterContentInit");
  }

  ngAfterContentChecked(){
    console.log("AppComponent:AfterContentChecked");
  }
  ngAfterViewInit(){
    console.log("AppComponent:AfterViewInit");
  }

  ngAfterViewChecked(){
    console.log("AppComponent: AfterViewChecked");
  }

  ngOnDestroy(){
    console.log("AppComponent:OnDestroy");
  }


  verdadero: boolean = false;

  title: string = 'Mi nueva pagina';

  hazmeClic(): void{
    alert("Hiciste clic!");
  }

  imgUrl: string = 'https://i.redd.it/7ksiaa4exhh01.gif'

  nombreAlumno: string = '';


}
