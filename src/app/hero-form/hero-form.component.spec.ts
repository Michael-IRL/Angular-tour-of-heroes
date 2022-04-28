import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { PowersService } from '../powers.service';
import { FormResponseComponent } from './form-response/form-response.component';

import { HeroFormComponent } from './hero-form.component';

function createNewEvent(
  eventName: string,
  bubbles = false,
  cancelable = false
) {
  let evt = document.createEvent('CustomEvent');
  evt.initCustomEvent(eventName, bubbles, cancelable, null);
  return evt;
}

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

describe('HeroFormComponent', () => {
  let component: HeroFormComponent;
  let fixture: ComponentFixture<HeroFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [HeroFormComponent, FormResponseComponent],
      providers: [
        HeroFormComponent,
        { provide: HeroService, useClass: MockHeroService },
        { provide: PowersService },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(HeroFormComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HeroFormComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  xit('should update name in the component', fakeAsync(() => {
    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('#name');

    input.value = 'Red';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.model.name).toEqual('Red');
  }));
});
