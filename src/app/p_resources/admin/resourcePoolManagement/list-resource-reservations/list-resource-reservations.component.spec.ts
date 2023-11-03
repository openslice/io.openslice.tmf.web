import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResourceReservationsComponent } from './list-resource-reservations.component';

describe('ListResourceReservationsComponent', () => {
  let component: ListResourceReservationsComponent;
  let fixture: ComponentFixture<ListResourceReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListResourceReservationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListResourceReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
