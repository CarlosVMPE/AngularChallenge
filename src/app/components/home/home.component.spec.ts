import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { DrinkComponent } from '../drink/drink.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { CocktaildbService } from '../../services/cocktaildb.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let cocktailService: CocktaildbService;
  let router = {
    navigate: jasmine.createSpy('navigate')
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ HomeComponent, DrinkComponent],
      providers: [{ provide: Router, useValue: router }, CocktaildbService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    cocktailService = component.cocktaildbservice;
    fixture.detectChanges();
  });

  it('Debe crearse el componente Home', () => {
    expect(component).toBeTruthy();
  });

  it('Debe inyectar el servicio CocktaildbService', () => {
    expect(cocktailService).toBeTruthy();
  });
  
  it('Debe llamarse a la función getRandomDrinks() en la función ngOnInit()', () => {
    let getRandomDrinks =
      spyOn(component, 'getRandomDrinks')
    component.ngOnInit();
    let category;
    cocktailService.category.subscribe(cat => category = cat);
    expect(category).toEqual('random');
    expect(getRandomDrinks).toHaveBeenCalled();
  });

  it("Debe renderizar un div de clase container", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll(".container").length).toBe(1);
  });

});
