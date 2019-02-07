import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivablesDiscountingComponent } from './receivables-discounting.component';

describe('ReceivablesDiscountingComponent', () => {
  let component: ReceivablesDiscountingComponent;
  let fixture: ComponentFixture<ReceivablesDiscountingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivablesDiscountingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivablesDiscountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
