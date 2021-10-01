import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuthorRegisterComponent } from './tuthor-register.component';

describe('TuthorRegisterComponent', () => {
  let component: TuthorRegisterComponent;
  let fixture: ComponentFixture<TuthorRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuthorRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TuthorRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
