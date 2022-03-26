import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HEROES } from '../mock-heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] =[]
  selectedHero?: Hero;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  constructor(private heroService:HeroService) { }

  ngOnInit(): void {
    this.getHeros();
  }

  getHeros(): void {
    this.heroService.getHeros().subscribe(heros => this.heroes = heros);
  }

}
