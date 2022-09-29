import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteServiceRelationshipComponent } from './delete-service-relationship.component';

describe('DeleteServiceRelationshipComponent', () => {
  let component: DeleteServiceRelationshipComponent;
  let fixture: ComponentFixture<DeleteServiceRelationshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteServiceRelationshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteServiceRelationshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
