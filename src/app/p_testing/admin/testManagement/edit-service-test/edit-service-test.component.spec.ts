import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServiceTestComponent } from './edit-service-test.component';

describe('EditServiceTestComponent', () => {
  let component: EditServiceTestComponent;
  let fixture: ComponentFixture<EditServiceTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditServiceTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditServiceTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
