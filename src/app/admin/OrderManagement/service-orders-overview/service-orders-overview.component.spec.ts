import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOrdersOverviewComponent } from './service-orders-overview.component';

describe('ServiceOrdersOverviewComponent', () => {
  let component: ServiceOrdersOverviewComponent;
  let fixture: ComponentFixture<ServiceOrdersOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceOrdersOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceOrdersOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
