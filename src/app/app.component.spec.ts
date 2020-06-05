import {
  TestBed,
  ComponentFixture,
  async,
  fakeAsync,
  tick,
} from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CocktaildbService } from "./services/cocktaildb.service";
import { NavbarHeaderComponent } from "./components/navbar-header/navbar-header.component";
import { Router, RouterModule } from "@angular/router";
import { Drink } from "./interfaces/drink.interface";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { HomeComponent } from "./components/home/home.component";
import { TypeDrinkComponent } from "./components/type-drink/type-drink.component";
import { DrinkComponent } from "./components/drink/drink.component";
import { DetailDrinkComponent } from "./components/detail-drink/detail-drink.component";

describe("AppComponent", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let service: CocktaildbService;
  let router = {
    navigate: jasmine.createSpy("navigate"),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        FormsModule,
        MatAutocompleteModule,
      ],
      declarations: [
        AppComponent,
        NavbarHeaderComponent,
        HomeComponent,
        TypeDrinkComponent,
        DrinkComponent,
        DetailDrinkComponent,
      ],
      providers: [RouterModule, CocktaildbService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    service = component.cocktaildbservice;
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it("Debe crear el app component", () => {
    expect(component).toBeTruthy();
  });

  it("Debe inyectar el servicio CocktaildbService", () => {
    expect(service).toBeTruthy();
  });

  it("en showCategories() debe llamar setListDrinks() de cocktaildbservice y setear un arreglo vacio", () => {
    let result: Drink[];
    service.listDrinks.subscribe((list) => (result = list));
    expect(result.length).toEqual(0);
  });

  it("Debe renderizar un titulo en un tag h1", () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h1").textContent).toContain(
      "Drinks Challenge App"
    );
  });

  it("Debe renderizar un parrafo en un tag p", () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("p").textContent).toContain(
      "Esta es una aplicación de bebidas con Thecocktaildb"
    );
  });

  it("Debe renderizar 4 botones de cada categoria", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll(".btn").length).toBe(4);
  });

  it("Al hacer click en un botón se debe ejecutar la función showCategories()", async(() => {
    const component = fixture.componentInstance;
    const navigateSpy = spyOn(router, "navigate");
    const category = 'categories';
    component.showCategories(category);
    expect(navigateSpy).toHaveBeenCalledWith(["/type-drinks", category]);
  }));
});
