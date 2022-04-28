import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { HeroesComponent } from './heroes.component';

import { Hero } from '../hero';
import { Observable, of } from 'rxjs';
import { HeroService } from '../hero.service';

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

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [HeroesComponent],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true },
        HeroesComponent,
        { provide: HeroService, useClass: MockHeroService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a h2 element', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')).toBeTruthy();
  });

  it('should contain a list', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('li')).toBeTruthy();
  });
});
