import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: '1° Generation', url: '/pokedex', icon: 'leaf', cssClass: 'generation-1' },  
    { title: '2° Generation', url: '/pokedex2', icon: 'flame', cssClass: 'generation-2' },  
    { title: '3° Generation', url: '/pokedex3', icon: 'water', cssClass: 'generation-3' }  
  ];

  constructor() {}

}