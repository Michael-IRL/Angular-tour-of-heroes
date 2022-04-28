import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

import { HeroDetailComponent } from './hero-detail.component';

const hero: Hero = {
  id: 1,
  power: 'Wind',
  name: 'Windstorm',
};

class MockHeroService {
  getHeros(): Observable<Hero[]> {
    let heroes: Hero[] = [hero];
    return of(heroes);
  }

  getHero(): Observable<Hero> {
    return new Observable((sub) => sub.next(hero));
  }
}

class MockActiveRoute {
  snapshot = { paramMap: { get: () => '' } };
}

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroDetailComponent],
      providers: [
        HeroDetailComponent,
        { provide: HeroService, useClass: MockHeroService },
        { provide: ActivatedRoute, useClass: MockActiveRoute },
        { provide: Location },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function of(heroes: Hero[]): Observable<Hero[]> {
  throw new Error('Function not implemented.');
}
