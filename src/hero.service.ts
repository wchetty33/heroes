import { Injectable } from '@angular/core';
mport { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  getHeroes(): Hero[] {
    return HEROES;
  }
  constructor() { }

}