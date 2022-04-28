import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

import { HeroSearchComponent } from './hero-search.component';

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
}

describe('HeroSearchComponent', () => {
  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroSearchComponent],
      providers: [
        HeroSearchComponent,
        {
          provide: HeroService,
          useClass: MockHeroService,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
