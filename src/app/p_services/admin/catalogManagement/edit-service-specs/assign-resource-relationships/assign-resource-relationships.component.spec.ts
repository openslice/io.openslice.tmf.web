import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignResourceRelationshipsComponent } from './assign-resource-relationships.component';

describe('AssignResourceRelationshipsComponent', () => {
  let component: AssignResourceRelationshipsComponent;
  let fixture: ComponentFixture<AssignResourceRelationshipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignResourceRelationshipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignResourceRelationshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
