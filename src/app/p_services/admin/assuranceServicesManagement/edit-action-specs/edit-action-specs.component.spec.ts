import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditActionSpecsComponent } from './edit-action-specs.component';

describe('EditActionsComponent', () => {
  let component: EditActionSpecsComponent;
  let fixture: ComponentFixture<EditActionSpecsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditActionSpecsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditActionSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
