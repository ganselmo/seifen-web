import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceConditionsComponent } from './price-conditions.component';

describe('PriceConditionsComponent', () => {
  let component: PriceConditionsComponent;
  let fixture: ComponentFixture<PriceConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceConditionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
