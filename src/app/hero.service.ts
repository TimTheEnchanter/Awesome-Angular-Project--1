import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './fake-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
}
getHeroes(): Observable<Hero[]> {
  return of(HEROES);
}