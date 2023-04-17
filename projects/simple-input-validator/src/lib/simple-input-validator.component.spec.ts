import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleInputValidatorComponent } from './simple-input-validator.component';

describe('SimpleInputValidatorComponent', () => {
  let component: SimpleInputValidatorComponent;
  let fixture: ComponentFixture<SimpleInputValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleInputValidatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleInputValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
