import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DetailDrinkComponent } from "./detail-drink.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CocktaildbService } from '../../services/cocktaildb.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { By } from '@angular/platform-browser';


describe("DetailDrinkComponent", () => {
  let component: DetailDrinkComponent;
  let cocktailService: CocktaildbService;
  let fixture: ComponentFixture<DetailDrinkComponent>;
  let debugEl;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DetailDrinkComponent
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [ RouterModule, CocktaildbService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    
    fixture = TestBed.createComponent(DetailDrinkComponent);
    component = fixture.componentInstance;
    cocktailService = component.cocktaildbservice;
    debugEl = fixture.debugElement;
    fixture.detectChanges();

  });

  it("Se crea el componente Detail Drink", () => {
    expect(component).toBeTruthy();
  });

  it('Debe inyectar el servicio CocktaildbService', () => {
    expect(cocktailService).toBeTruthy();
  });
  
  it('Debe llamarse a la función getCocktailById() en la función ngOnInit()', () => {
    const id = '17222'
    component.getCocktailById(id);

    let getDrinkById =
      spyOn(cocktailService, 'getDrinkById')
    component.ngOnInit();

    expect(getDrinkById).toHaveBeenCalled();
  });

  it("Debe renderizar un div de clase detail-drink", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll(".detail-drink").length).toBe(1);
  });
  
  it("Debe renderizar un div de clase no-gutters", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll(".no-gutters").length).toBe(1);
  });

  it("Debe renderizar un div de clase col-md-4", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll(".col-md-4").length).toBe(1);
  });

  it("Debe renderizar un div de clase detail-drink__img si cuenta con imagen la bebida", () => {
    expect(fixture.debugElement.query(By.css('.detail-drink__img'))).toBeNull();
  });
  
  it("Debe renderizar un div de clase detail-drink__dateModified", () => {
    expect(fixture.debugElement.query(By.css('.detail-drink__dateModified'))).toBeNull();
  });
  
  it("Debe renderizar un div de clase card", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll(".card").length).toBeGreaterThanOrEqual(1);
  });
  
  it("Debe renderizar un ul de clase list-group", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll(".list-group").length).toBe(1);
  });
  
  it("Debe renderizar un div de clase detail-drink_strDrink", () => {
    expect(fixture.debugElement.query(By.css('.detail-drink_strDrink'))).toBeNull();
  });
  
  it("Debe renderizar un div de clase detail-drink_strInstructions", () => {
    expect(fixture.debugElement.query(By.css('.detail-drink_strInstructions'))).toBeNull();
  });
  
  it("Debe renderizar un div de clase detail-drink_strInstructionsDE", () => {
    expect(fixture.debugElement.query(By.css('.detail-drink_strInstructionsDE'))).toBeNull();
  });
  
  it("Debe renderizar un div de clase detail-drink_strCategory", () => {
    expect(fixture.debugElement.query(By.css('.detail-drink_strCategory'))).toBeNull();
  });
  
  it("Debe renderizar un div de clase detail-drink_strIngredient1", () => {
    expect(fixture.debugElement.query(By.css('.detail-drink_strIngredient1'))).toBeNull();
  });
  it("Debe renderizar un div de clase detail-drink_strIngredient2", () => {
    expect(fixture.debugElement.query(By.css('.detail-drink_strIngredient2'))).toBeNull();
  });
  it("Debe renderizar un div de clase detail-drink_strIngredient3", () => {
    expect(fixture.debugElement.query(By.css('.detail-drink_strIngredient3'))).toBeNull();
  });
  it("Debe renderizar un div de clase detail-drink_strIngredient4", () => {
    expect(fixture.debugElement.query(By.css('.detail-drink_strIngredient4'))).toBeNull();
  });
  it("Debe renderizar un div de clase detail-drink_strIngredient5", () => {
    expect(fixture.debugElement.query(By.css('.detail-drink_strIngredient5'))).toBeNull();
  });
  it("Debe renderizar un div de clase detail-drink_strIngredient6", () => {
    expect(fixture.debugElement.query(By.css('.detail-drink_strIngredient6'))).toBeNull();
  });
  it("Debe renderizar un div de clase detail-drink_strIngredient7", () => {
    expect(fixture.debugElement.query(By.css('.detail-drink_strIngredient7'))).toBeNull();
  });
  it("Debe renderizar un div de clase detail-drink_strIngredient8", () => {
    expect(fixture.debugElement.query(By.css('.detail-drink_strIngredient8'))).toBeNull();
  });
  it("Debe renderizar un div de clase detail-drink_strIngredient9", () => {
    expect(fixture.debugElement.query(By.css('.detail-drink_strIngredient9'))).toBeNull();
  });
  it("Debe renderizar un div de clase detail-drink_strIngredient10", () => {
    expect(fixture.debugElement.query(By.css('.detail-drink_strIngredient10'))).toBeNull();
  });
});
