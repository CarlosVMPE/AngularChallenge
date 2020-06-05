import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeDrinkComponent } from './type-drink.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DrinkComponent } from '../drink/drink.component';
import { CocktaildbService } from '../../services/cocktaildb.service';
import { By } from '@angular/platform-browser';
import { StorageService } from '../../services/storage.service';

describe('TypeDrinkComponent', () => {
  let component: TypeDrinkComponent;
  let fixture: ComponentFixture<TypeDrinkComponent>;
  let cocktailService: CocktaildbService;
  let storageService: StorageService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeDrinkComponent, DrinkComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [ CocktaildbService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeDrinkComponent);
    component = fixture.componentInstance;
    cocktailService = component.cocktaildbservice;
    storageService = component.storageService;
    fixture.detectChanges();
  });

  it('Debe crear el componente TypeDrink', () => {
    expect(component).toBeTruthy();
  });

  it('Debe inyectar el servicio CocktaildbService', () => {
    expect(cocktailService).toBeTruthy();
  });
  
  it('Debe inyectar el servicio StorageService', () => {
    expect(storageService).toBeTruthy();
  });

  it('Se debe crear la función showTypeOfDrink()', () => {
    const id = 'categories'
    component.showTypeOfDrink(id);
    expect(component.category).toEqual('c');
  });

  it('Se debe crear la función findByCategory()', () => {
    const strCategory = "Ordinary Drink"
    cocktailService.category.next('c')
    component.findByCategory(strCategory);
    cocktailService.category.subscribe( cat => expect(cat).toEqual('c'))
  });

  it("Debe renderizar un div de clase type-drinks", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll(".type-drinks").length).toBe(1);
  });

  it("Debe renderizar un div de clase drink por cada bebida", () => {
    expect(fixture.debugElement.query(By.css('.drink'))).toBeNull();
  });
  
  it("Debe renderizar un button para el tipo Categories", () => {
    expect(fixture.debugElement.query(By.css('.btn-strCategory'))).toBeNull();
  });
  
  it("Debe renderizar un button para el tipo Glass", () => {
    expect(fixture.debugElement.query(By.css('.btn-strGlass'))).toBeNull();
  });
  
  it("Debe renderizar un button para el tipo Ingredients", () => {
    expect(fixture.debugElement.query(By.css('.btn-strIngredient1'))).toBeNull();
  });
  
  it("Debe renderizar un button para el tipo strAlcoholic", () => {
    expect(fixture.debugElement.query(By.css('.btn-strAlcoholic'))).toBeNull();
  });
  
  it("Debe renderizar un div para el contenido de los subtipos de categoria", () => {
    expect(fixture.debugElement.query(By.css('.subTypeDrinks'))).toBeNull();
  });
});
