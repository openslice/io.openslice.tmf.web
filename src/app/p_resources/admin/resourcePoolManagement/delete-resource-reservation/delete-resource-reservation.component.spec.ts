import { DeleteResourceReservationComponent } from './delete-resource-reservation.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('DeleteResourceReservationComponent', () => {
  let component: DeleteResourceReservationComponent;
  let fixture: ComponentFixture<DeleteResourceReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteResourceReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteResourceReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
