import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignServiceRelationshipsComponent } from './assign-service-relationships.component';

describe('AssignServiceRelationshipsComponent', () => {
  let component: AssignServiceRelationshipsComponent;
  let fixture: ComponentFixture<AssignServiceRelationshipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignServiceRelationshipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignServiceRelationshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
