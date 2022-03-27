import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { HEROES } from '../mock-heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] =[]
  selectedHero?: Hero;

  constructor(private heroService:HeroService, private messageService:MessageService) { }


  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.messageService.add(`Hero component: Selected hero with id ${hero.id}`);
  }
  
  ngOnInit(): void {
    this.getHeros();
  }

  getHeros(): void {
    this.heroService.getHeros().subscribe(heros => this.heroes = heros);
  }

}
