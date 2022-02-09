import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServiceOrderItemsComponent } from './edit-service-order-items.component';

describe('EditServiceOrderItemsComponent', () => {
  let component: EditServiceOrderItemsComponent;
  let fixture: ComponentFixture<EditServiceOrderItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditServiceOrderItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditServiceOrderItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
