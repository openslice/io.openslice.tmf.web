import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServiceOrdersComponent } from './list-service-orders.component';

describe('ListServiceOrdersComponent', () => {
  let component: ListServiceOrdersComponent;
  let fixture: ComponentFixture<ListServiceOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListServiceOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListServiceOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
