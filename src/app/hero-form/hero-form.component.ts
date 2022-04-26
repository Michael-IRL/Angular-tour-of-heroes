import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { PowersService } from '../powers.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.less'],
})
export class HeroFormComponent implements OnInit {
  powers: string[] = [];

  model: Hero = new Hero(0, '', '');

  submitted = false;

  constructor(
    private powersService: PowersService,
    private heroService: HeroService
  ) {}

  ngOnInit(): void {
    this.newHero();
    this.getPowers();
  }

  onSubmit() {
    this.submitted = true;
    this.model.id ? this.updateHero() : this.addHero();
  }

  newHero(): void {
    this.model = new Hero(0, '', '');
  }

  getPowers(): void {
    this.powersService
      .getPowers()
      .subscribe((powers) => (this.powers = powers));
  }

  addHero(): void {
    this.heroService
      .addHero({
        name: this.model.name,
        power: this.model.power,
        alterEgo: this.model.alterEgo,
      } as Hero)
      .subscribe((hero) => (this.model = hero));
  }

  updateHero(): void {
    this.heroService.updateHero(this.model as Hero);
  }
}
