import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignServiceSpecificationComponent } from './assign-service-specification.component';

describe('AssignServiceSpecificationComponent', () => {
  let component: AssignServiceSpecificationComponent;
  let fixture: ComponentFixture<AssignServiceSpecificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignServiceSpecificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignServiceSpecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
