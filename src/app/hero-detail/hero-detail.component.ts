import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from './fake-heroes';

@Input() hero: Hero;

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
