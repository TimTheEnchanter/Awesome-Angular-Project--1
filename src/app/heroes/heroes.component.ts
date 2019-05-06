import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../fake-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  hero: 'Windstorm'
})
export class HeroesComponent implements OnInit {

	selectedHero: Hero;

	onSelect(hero: Hero): void {
  		this.selectedHero = hero;
	}

  constructor() { }

  ngOnInit() {
  }

}

