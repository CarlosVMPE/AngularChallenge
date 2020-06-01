import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeDrinkComponent } from './type-drink.component';

describe('TypeDrinkComponent', () => {
  let component: TypeDrinkComponent;
  let fixture: ComponentFixture<TypeDrinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeDrinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
