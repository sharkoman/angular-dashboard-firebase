import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsOverviewComponent } from './students-overview.component';

describe('StudentsOverviewComponent', () => {
  let component: StudentsOverviewComponent;
  let fixture: ComponentFixture<StudentsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
