import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServiceTestSpecComponent } from './edit-service-test-spec.component';

describe('EditServiceTestSpecComponent', () => {
  let component: EditServiceTestSpecComponent;
  let fixture: ComponentFixture<EditServiceTestSpecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditServiceTestSpecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditServiceTestSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
