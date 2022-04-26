import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', power: 'mind' },
      { id: 12, name: 'Narco', power: 'dark' },
      { id: 13, name: 'Bombasto', power: 'fire' },
      { id: 14, name: 'Celeritas', power: 'light' },
      { id: 15, name: 'Magneta', power: 'magnetism' },
      { id: 16, name: 'RubberMan', power: 'flex' },
      { id: 17, name: 'Dynama', power: 'speed' },
      { id: 18, name: 'Dr IQ', power: 'smart' },
      { id: 19, name: 'Magma', power: 'lava' },
      { id: 20, name: 'Tornado', power: 'wind' },
    ];
    return { heroes };
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
