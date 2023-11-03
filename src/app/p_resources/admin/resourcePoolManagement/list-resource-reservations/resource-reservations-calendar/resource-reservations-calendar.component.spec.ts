import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceReservationsCalendarComponent } from './resource-reservations-calendar.component';

describe('ResourceReservationsCalendarComponent', () => {
  let component: ResourceReservationsCalendarComponent;
  let fixture: ComponentFixture<ResourceReservationsCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceReservationsCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceReservationsCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
