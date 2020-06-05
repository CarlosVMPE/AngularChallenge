import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { DrinkComponent } from './drink.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('DrinkComponent', () => {
  let component: DrinkComponent;
  let fixture: ComponentFixture<DrinkComponent>;
  let router = {
    navigate: jasmine.createSpy('navigate')
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ DrinkComponent ],
      providers: [{ provide: Router, useValue: router }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('Componente Drink creado', () => {
    expect(component).toBeTruthy();
  });
  
  it('Validando @Input drinks', () => {
    component.drinks = [];
    fixture.detectChanges();

    expect(component.drinks.length).toBeGreaterThanOrEqual(0)
  });
  
  it('Validando @Input pag', () => {
    component.pag = "";
    fixture.detectChanges();

    expect(component.pag.length).toBeGreaterThanOrEqual(0)
  });

  it('crear función showDetailDrink() el cual te permite navegar a /drink y saber mas detalle de la bebida', fakeAsync(() => {
    let pag = 'categories'
    let id = '17222'
    component.pag = pag;
    component.showDetailDrink(id);

    expect(router.navigate).toHaveBeenCalledWith(['/drink', id, pag]);
  })); 

  it("Debe renderizar un div de clase card-columns", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll(".card-columns").length).toBe(1);
  });
  
  // Cuando se pinte información de los productos
  /* it("Debe renderizar un div de clase card-img-top", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll(".card-img-tops").length).toBeGreaterThanOrEqual(1);
  }); */
});
