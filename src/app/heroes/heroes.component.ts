import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {HEROES} from'../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
hero : Hero ={
     id:1,
     name:'Windstorm'
 };
 //les héros sont ceux dans le fichier mock-heroes
 heroes=HEROES; 
 //méthode qui affecte le héros cliqué à l'élément héro selectionné
selectedHero: Hero;
onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
  constructor() { }
 
  ngOnInit() {
  }

}
