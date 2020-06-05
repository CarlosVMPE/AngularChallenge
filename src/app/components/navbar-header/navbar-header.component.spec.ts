import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
} from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { NavbarHeaderComponent } from "./navbar-header.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { Router, RouterLinkWithHref } from "@angular/router";
import { CocktaildbService } from "../../services/cocktaildb.service";
import { StorageService } from "../../services/storage.service";
import { of } from "rxjs";
import { By } from "@angular/platform-browser";
import { MatFormFieldModule } from '@angular/material/form-field';

describe("NavbarHeaderComponent", () => {
  let component: NavbarHeaderComponent;
  let fixture: ComponentFixture<NavbarHeaderComponent>;
  let cocktailService: CocktaildbService;
  let storageService: StorageService;
  let debugEl;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        FormsModule,
        MatAutocompleteModule
      ],
      declarations: [NavbarHeaderComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarHeaderComponent);
    component = fixture.componentInstance;
    cocktailService = component.cocktaildbservice;
    storageService = component.storageService;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it("Debe crear el Navbar component", () => {
    expect(component).toBeTruthy();
  });

  it("Debe inyectar el servicio de CocktaildbService", () => {
    expect(cocktailService).toBeTruthy();
  });

  it("Debe inyectar el servicio de StorageService", () => {
    expect(storageService).toBeTruthy();
  });

  it("Debe llamar _filter() en el ngOnInit() cuando filteredOptions cambie de valor", () => {
    component.filteredOptions.subscribe((val) => {
      if (val) {
        spyOn(component, "_filter").and.callThrough();
        component.ngOnInit();
        expect(component._filter).toHaveBeenCalled();
      }
    });
  });

  it("Se debe crear la función displayFn() la cual recibe de parametro un objeto, y retorna su nombre", () => {
    const cocktail = "Almeria";
    let cad = component.displayFn({ name: cocktail });
    expect(cocktail).toEqual(cad);
  });

  it("Se debe crear la función _filter() la cual recibe de parametro un nombre y este será procesado para el autocompletador", () => {
    const letter = "a";
    let cad = component._filter(letter);
    expect(cad.length).toBeGreaterThanOrEqual(0);
  });

  it("Se debe crear la función setCategory() la cual setea la categoria en random", () => {
    component.setCategory();
    let category;
    cocktailService.category.subscribe((cat) => (category = cat));
    expect(category).toEqual("random");
  });

  /*  it('en getDrink() te permite navegar a /drink bajo un parametro id', fakeAsync(() => {
    let cat = 'categories';
    let drink = { id: '17222'}
    component.category = 'c';
    component.getDrink({id: '17222'});
    console.log(component.category);
    expect(router.navigate).toHaveBeenCalledWith('/drink', drink.id, component.category);
  })); */

  it("Debe renderizar un navbar", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll(".navbar").length).toBe(1);
  });

  it("Dentro del navbar debe renderizar un anchor que diga Drinks App", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll(".navbar a.navbar-brand").length).toBe(1);
    expect(
      compiled.querySelector(".navbar a.navbar-brand").textContent
    ).toContain("Drinks App");
  });

  it("Dentro del navbar debe renderizar un button para el toggle del navbar", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(
      compiled.querySelectorAll(".navbar button.navbar-toggler").length
    ).toBe(1);
  });

  //expect(compiled.querySelector('.navbar-toggler').innerHTML).toBe('Yes');

  it("Dentro del navbar debe renderizar un div con el id navbarSupportedContent", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll("#navbarSupportedContent").length).toBe(1);
  });

  it("Al hacer click en Random se debe ejecutar la función setCategory()", async(() => {
    // Mapeo de click
    /* let anchor = fixture.debugElement.query(By.css(".nav-link"));
    let an = anchor.nativeElement;
    an.click();
    let category;
    cocktailService.category.subscribe((cat) => (category = cat));
    console.log(category);

    
    expect(category).toEqual("random"); */

    const linkDebugEl = debugEl.query(By.css('.nav-link'));
    const routerLinkInstance = linkDebugEl.injector.get(RouterLinkWithHref);
    //console.log(routerLinkInstance['href']);
    expect(routerLinkInstance['href']).toEqual('/random');
    /* expect(routerLinkInstance['commands']).toEqual(['/random']);
     */

  }));
});
