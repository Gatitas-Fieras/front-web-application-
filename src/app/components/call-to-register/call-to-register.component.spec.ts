import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallToRegisterComponent } from './call-to-register.component';

describe('CallToRegisterComponent', () => {
  let component: CallToRegisterComponent;
  let fixture: ComponentFixture<CallToRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallToRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallToRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
