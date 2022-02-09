import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteServiceOrderComponent } from './delete-service-order.component';

describe('DeleteServiceOrderComponent', () => {
  let component: DeleteServiceOrderComponent;
  let fixture: ComponentFixture<DeleteServiceOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteServiceOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteServiceOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
