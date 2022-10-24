import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignResourceSpecRelationshipsComponent } from './assign-resource-spec-relationships.component';

describe('AssignResourceSpecRelationshipsComponent', () => {
  let component: AssignResourceSpecRelationshipsComponent;
  let fixture: ComponentFixture<AssignResourceSpecRelationshipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignResourceSpecRelationshipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignResourceSpecRelationshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
