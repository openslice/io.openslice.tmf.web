import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditResourceRelationshipsComponent } from './edit-resource-relationships.component';

describe('EditResourceRelationshipsComponent', () => {
  let component: EditResourceRelationshipsComponent;
  let fixture: ComponentFixture<EditResourceRelationshipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditResourceRelationshipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditResourceRelationshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
