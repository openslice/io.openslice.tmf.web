import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAlarmsComponent } from './list-alarms.component';

describe('ListAlarmsComponent', () => {
  let component: ListAlarmsComponent;
  let fixture: ComponentFixture<ListAlarmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAlarmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAlarmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
