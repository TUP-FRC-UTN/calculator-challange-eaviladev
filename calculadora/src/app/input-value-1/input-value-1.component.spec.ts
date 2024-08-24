import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputValue1Component } from './input-value-1.component';

describe('InputValue1Component', () => {
  let component: InputValue1Component;
  let fixture: ComponentFixture<InputValue1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputValue1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputValue1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
