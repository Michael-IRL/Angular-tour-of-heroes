import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HEROES } from '../mock-heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[]
  selectedHero?: Hero;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  constructor() {
    this.heroes = []
  }

  ngOnInit(): void {
    this.heroes = HEROES;
  }

}
