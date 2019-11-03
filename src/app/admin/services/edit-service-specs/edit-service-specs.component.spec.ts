import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServiceSpecsComponent } from './edit-service-specs.component';

describe('EditServiceSpecsComponent', () => {
  let component: EditServiceSpecsComponent;
  let fixture: ComponentFixture<EditServiceSpecsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditServiceSpecsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditServiceSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
