import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIndividualsComponent } from './edit-individuals.component';

describe('EditIndividualsComponent', () => {
  let component: EditIndividualsComponent;
  let fixture: ComponentFixture<EditIndividualsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditIndividualsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditIndividualsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
