import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingStudentComponent } from './ranking-student.component';

describe('RankingStudentComponent', () => {
  let component: RankingStudentComponent;
  let fixture: ComponentFixture<RankingStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankingStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
