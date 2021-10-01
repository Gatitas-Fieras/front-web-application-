import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreSpokenComponent } from './more-spoken.component';

describe('MoreSpokenComponent', () => {
  let component: MoreSpokenComponent;
  let fixture: ComponentFixture<MoreSpokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreSpokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreSpokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
