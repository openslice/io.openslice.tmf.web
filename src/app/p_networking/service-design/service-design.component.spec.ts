import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDesignComponent } from './service-design.component';

describe('ServiceDesignComponent', () => {
  let component: ServiceDesignComponent;
  let fixture: ComponentFixture<ServiceDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
