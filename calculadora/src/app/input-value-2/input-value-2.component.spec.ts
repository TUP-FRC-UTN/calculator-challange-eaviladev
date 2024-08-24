import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputValue2Component } from './input-value-2.component';

describe('InputValue2Component', () => {
  let component: InputValue2Component;
  let fixture: ComponentFixture<InputValue2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputValue2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputValue2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
