import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { HeroesComponent } from './heroes.component';

import { Hero } from '../hero';

const hero: Hero = {
  id: 1,
  name: 'Windstorm'
};

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[FormsModule],
      declarations: [HeroesComponent],
      providers: [
	{ provide: ComponentFixtureAutoDetect, useValue: true }
  ]
    })
    .compileComponents();
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
  })

  it('should contain a uppercase name in h2 element', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain(hero.name.toUpperCase());
  })

  it('should contain a hero', () => {
    expect(component.hero).toEqual(hero)
  })

  it('should render id field', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('div')?.textContent).toContain(hero.id);
  })

  it('should render name field', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('div:nth-of-type(2)')?.textContent).toContain(hero.name);
  })

  it('should have a name input box', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const input = compiled.querySelector('#name') as HTMLInputElement;
    console.log(compiled.querySelector('#displayName')?.textContent);
    fixture.detectChanges();
    input.value = 'test';

    input.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    console.log(compiled.querySelector('#displayName')?.textContent);
    expect(compiled.querySelector('#displayName')?.textContent).toContain('test');
  
  })
});
