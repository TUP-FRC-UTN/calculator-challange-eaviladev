import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculosComponent } from './calculos.component';

describe('CalculosComponent', () => {
  let component: CalculosComponent;
  let fixture: ComponentFixture<CalculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
