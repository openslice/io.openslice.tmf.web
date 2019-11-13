import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignServiceCandidatesComponent } from './assign-service-candidates.component';

describe('AssignServiceCandidatesComponent', () => {
  let component: AssignServiceCandidatesComponent;
  let fixture: ComponentFixture<AssignServiceCandidatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignServiceCandidatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignServiceCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
