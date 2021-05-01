import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAlarmComponent } from './edit-alarm.component';

describe('EditAlarmComponent', () => {
  let component: EditAlarmComponent;
  let fixture: ComponentFixture<EditAlarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAlarmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAlarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
