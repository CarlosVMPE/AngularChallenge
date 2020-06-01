import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDrinkComponent } from './detail-drink.component';

describe('DetailDrinkComponent', () => {
  let component: DetailDrinkComponent;
  let fixture: ComponentFixture<DetailDrinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailDrinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
