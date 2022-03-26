import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heros';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  constructor() { }

  getHeros(): Observable<Hero[]> {
    const heros = of(HEROES);
    return heros;
  }
}
