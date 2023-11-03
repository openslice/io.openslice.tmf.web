import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminateServiceOrderItemsComponent } from './terminate-service-order-items.component';

describe('TerminateServiceOrderItemsComponent', () => {
  let component: TerminateServiceOrderItemsComponent;
  let fixture: ComponentFixture<TerminateServiceOrderItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminateServiceOrderItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminateServiceOrderItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
