import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './fake-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
}
