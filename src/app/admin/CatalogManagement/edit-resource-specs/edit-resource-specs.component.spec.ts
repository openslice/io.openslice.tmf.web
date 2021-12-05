import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditResourceSpecsComponent } from './edit-resource-specs.component';

describe('EditResourceSpecsComponent', () => {
  let component: EditResourceSpecsComponent;
  let fixture: ComponentFixture<EditResourceSpecsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditResourceSpecsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditResourceSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
