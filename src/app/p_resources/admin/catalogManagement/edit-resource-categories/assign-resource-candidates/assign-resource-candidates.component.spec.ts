import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignResourceCandidatesComponent } from './assign-resource-candidates.component';

describe('AssignResourceCandidatesComponent', () => {
  let component: AssignResourceCandidatesComponent;
  let fixture: ComponentFixture<AssignResourceCandidatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignResourceCandidatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignResourceCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
